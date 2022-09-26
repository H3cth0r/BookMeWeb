from flask import Flask, request, g, make_response
from flask import render_template
#from flask_jwt import JWT, jwt_required, current_identity
import json
import jwt
import sqlite3

print("Server started")

app = Flask(__name__)

DATABASE = 'DB\BookMeDB.db'
jwtKey = 'Get2Bookin'
#app.config['SECRET_KEY'] = 'super-secret'

def make_dicts(cursor, row):
    return dict((cursor.description[idx][0], value)
                for idx, value in enumerate(row))

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory = make_dicts
    return db

@app.route("/")
def hello_world(name=None):
    return render_template('main.html', name=name)

def createJWT(jsnDict):
    return jwt.encode(jsnDict, jwtKey, algorithm="HS256")

#api

# --- auth errors ---
# 101 invalid user
# 102 wrong pwd
# 103 blocked


@app.route("/login", methods=['POST'])
def login(name=None):
    body = request.get_json()
    cur = get_db().cursor()
    resp = make_response()
    user = cur.execute("SELECT Users.id, Users.firstName, Users.hashPassword FROM Users WHERE email = ?", (body['email'],)).fetchone()
    if user is None:
        respBody = json.dumps({"authorized":False, "errorId":101}) #, "desc":"Invalid user"
    elif user["hashPassword"] == body["password"]:
        #respBody = {"authorized":True}
        respBody = render_template('main.html', name=name)
        resp.set_cookie("JWT","asdfg")
    else:
        respBody = json.dumps({"authorized":False, "errorId":102}) #, "desc":"Wrong pwd"

    resp.set_data(respBody)

    return resp

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()