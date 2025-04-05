# Getting Started with Create React App
This project was bootstrapped with Create React App.

# Getting Started with Django App
This project was bootstrapped with https://www.djangoproject.com/

# Create a virtual environment to install dependencies in and activate it:

### pip install virtualenv
### python -m venv venv
### venv\Scripts\activate
#Then install the dependencies:

### (env)$ pip install -r requirements.txt

# Enable database and django apps

### python manage.py makemigrations usuarios
### python manage.py makemigrations clientes
### python manage.py makemigrations proyectos
### python manage.py migrate

# Load data (opcional)

###  python manage.py loaddata data.json

# Install react packages

### npm install
### npm run build


# Run servers

Available Scripts
In the project directory, you can run:

###  python manage.py runserver
###  npm run start

Runs the app in the development mode.
Open http://localhost:8000 for backend.
Open http://localhost:3000 for frontend.
