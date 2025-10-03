## How to run local

Follow these steps to get the project up and running locally.
When you're marking please ignore the tester.html and tester.css files!

### 1. Clone the repository

```bash
git clone https://github.com/CMDCONN/stf-connor
cd meproj
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```
if any errors with this step try (depending on python version pathed):
```bash
python -m pip install -r requirements.txt
python3 -m pip install -r requirements.txt
```

### 3. Apply migrations (make sure you are in the same directory as the manage.py file)

```bash
python manage.py migrate
```
### (or)
```bash
python3 manage.py migrate
```

### 4. Run the development server

```bash
python manage.py runserver
```
### (or)
```bash
python manage.py runserver
```
Open your browser and go to `http://127.0.0.1:8000` or `http://localhost:8000` once it's hosted, hope you like it!

### If the first method doesn't work:
You may use live-server, a vscode extention to open the file in the directory:
```bash
/meproj/myapp/templates/home.html
```


