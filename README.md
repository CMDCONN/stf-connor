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

The env example file can be found at: `/meproj/.env.example`
Using the .env.example file as a template, create an .env file in its place, to generate a new key run this:
Dont forget that if you're using python3 replace python with python3
```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```


Then copy the generated key into your .env.example file like so:

```
SECRET_KEY=your_generated_key_here
```
Then remove the .example from the .env.example file name.

it should now be named `.env`

### 4. Run the development server

```bash
python manage.py runserver
```
### (or)
```bash
python3 manage.py runserver
```
Open your browser and go to `http://127.0.0.1:8000` or `http://localhost:8000` once it's hosted, hope you like it!

### If the first method doesn't work:
You may use live-server, a vscode extention to open the file in the directory:
```bash
/meproj/myapp/templates/home.html
```

And with any luck one of those methods will work
