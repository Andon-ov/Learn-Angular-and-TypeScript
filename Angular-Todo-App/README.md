# My Django Project

This is a Django project that includes basic setup for a web application. The project includes instructions on how to run the development server and access the admin panel.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Andon-ov/Learn-Angular-and-TypeScript.git
```

Navigate to the project directory:

```bash
cd Angular-Todo-App
```

Create a virtual environment and activate it:

    python -m venv venv
    source venv/bin/activate

Install the project dependencies using pip:

    pip install -r requirements.txt

Start the development server:

    python manage.py runserver

The development server will run at http://127.0.0.1:8000/.

## Accessing the Admin Panel

1. Open your web browser and go to http://127.0.0.1:8000/admin/.

2. Log in using the superuser account you created earlier (username: admin, password: admin).

## Additional Notes

- The `db.sqlite3` file is included in the repository for demonstration purposes. In a real-world scenario, you would not include the database file in version control. You can create your own local database for development.

- Remember to keep sensitive information like passwords and API keys secure. Do not share them in public repositories.

- Customize the project as needed for your specific requirements.

For more information on Django, visit the [Django documentation](https://docs.djangoproject.com/).
