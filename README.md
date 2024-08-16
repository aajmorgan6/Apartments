# Apartment Findr

## About the application
This simple page shows information about apartments. The main table includes every apartment in the database, showing their ID and Address as their name. Each row is clickable, and will pop up a modal displaying extra information, like rent price and square footage.

The detail modal also has two buttons on the bottom, Delete and Edit. Delete will delete the apartment from the database, and edit will change the modal to a form the change the information, and then update the database.

The Add Apartment button will pop up a modal with a form to fill out for Address, Square Footage, and Price.

## Setup

After cloning the repo, have one terminal cd into `backend` and another into `frontend`. 

In `backend`, start by initializing a virtual environment and installing the libraries
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

I have the secret key in a `.env` file, but this is it:
```python3
'django-insecure-7ivzo8go+%x4xc#/bin/zsh%v0dj8x&c4s5hsh4dw7)2treou8(cti'
```

You can either put that in a `.env` file or replace `os.getenv('SECRET_KEY')` with it on line 27 of `settings.py`.

You can then run the backend with `python manage.py runserver`

For the frontend, I've included these libraries
```bash
npm install react-bootstrap bootstrap
```

and then run `npm start dev` to start both. 
