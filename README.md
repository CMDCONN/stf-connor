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

### 3. Set up environment variables

Using the .env.example file as a template, create a .env file in its place, to generate a new key simply run this:
```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```
Then copy the generated key into your .env file like so:

```
SECRET_KEY=your_generated_key_here
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


