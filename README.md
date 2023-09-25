# grupo-3-backend

## Creating your venv environment (Running localy)
```
python3 -v venv .venv
```
to activate 
```
source .env/bin/activate
```
To deactivate
```
deactivate
```

### install packages 
pip install requirements.txt

### Running inside Docker container
first, build the image
```
docker build .
```
then run the image that was builded 
```
docker-compose up
```
go to http://localhost:8000/

Postgress will be running on user@localhost:5432/mydb-dev
### running Django
```
python manage.py migrate
python manage.py runserver
```