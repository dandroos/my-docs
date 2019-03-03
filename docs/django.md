# Django <!-- omit in toc --> 
*** 
### Contents <!-- omit in toc --> 
- [Introduction and Installation](#introduction-and-installation)
  - [What is it?](#what-is-it)
  - [How do I start a Django project?](#how-do-i-start-a-django-project)
  - [How do I start the development server?](#how-do-i-start-the-development-server)
- [URLs, Views and Templates](#urls-views-and-templates)
  - [What are URLs and Views in Django?](#what-are-urls-and-views-in-django)
  - [How do I set up the urls.py file?](#how-do-i-set-up-the-urlspy-file)
  - [Can I link my homepage to another section of my site?](#can-i-link-my-homepage-to-another-section-of-my-site)
  - [How do I set up the views.py file?](#how-do-i-set-up-the-viewspy-file)
  - [How do I use HTML templates?](#how-do-i-use-html-templates)
  - [How do I 'extend' templates?](#how-do-i-extend-templates)
  - [How can I use URL parameters?](#how-can-i-use-url-parameters)
  - [How should I link to other parts of my site?](#how-should-i-link-to-other-parts-of-my-site)
- [Apps](#apps)
  - [What is an app?](#what-is-an-app)
  - [How do I create a new app?](#how-do-i-create-a-new-app)
  - [How should I structure my templates folder within apps?](#how-should-i-structure-my-templates-folder-within-apps)
  - [How do I access the additional apps' URLs from the main urls.py?](#how-do-i-access-the-additional-apps-urls-from-the-main-urlspy)
- [Models](#models)
  - [What is a model?](#what-is-a-model)
  - [Where are models defined?](#where-are-models-defined)
  - [How are models defined?](#how-are-models-defined)
  - [Can I use methods in models?](#can-i-use-methods-in-models)
  - [What about media?](#what-about-media)
  - [How do I migrate models to the database?](#how-do-i-migrate-models-to-the-database)
  - [What is ORM?](#what-is-orm)
  - [How do I use ORM in my views?](#how-do-i-use-orm-in-my-views)
  - [How can I use models on the front end?](#how-can-i-use-models-on-the-front-end)
  - [How do I control how it displays in the admin area?](#how-do-i-control-how-it-displays-in-the-admin-area)
  - [Can I use properties from other models?](#can-i-use-properties-from-other-models)
- [Admin area](#admin-area)
  - [What is the admin area?](#what-is-the-admin-area)
  - [How do I create the main user (AKA superuser)?](#how-do-i-create-the-main-user-aka-superuser)
  - [How do I view models in the admin area?](#how-do-i-view-models-in-the-admin-area)
- [Static assets](#static-assets)
  - [What are static assets?](#what-are-static-assets)
  - [How do I configure static assets?](#how-do-i-configure-static-assets)
    - [In development (pre deployment)](#in-development-pre-deployment)
    - [In deployment (to pythonanywhere.com)](#in-deployment-to-pythonanywherecom)
- [Forms](#forms)
  - [How do I set up a user signup form in Django?](#how-do-i-set-up-a-user-signup-form-in-django)
  - [How do I save users to the database?](#how-do-i-save-users-to-the-database)
  - [How do I redirect the user after a successful form submission?](#how-do-i-redirect-the-user-after-a-successful-form-submission)
    - [Basic](#basic)
    - [Using the 'next' functionality](#using-the-next-functionality)
  - [What if the request to the view returning the form is a GET request?](#what-if-the-request-to-the-view-returning-the-form-is-a-get-request)
  - [How do I set up a login form?](#how-do-i-set-up-a-login-form)
  - [How do I log users into my app?](#how-do-i-log-users-into-my-app)
  - [How do I log users out of my app?](#how-do-i-log-users-out-of-my-app)
  - [Can I generate a form from a model?](#can-i-generate-a-form-from-a-model)
- [Content restriction](#content-restriction)
  - [How do I restrict access to pages?](#how-do-i-restrict-access-to-pages)
  - [How do I restrict access to content within pages?](#how-do-i-restrict-access-to-content-within-pages)
- [Deployment](#deployment)

***
## Introduction and Installation
### What is it?
Django is a full stack web framework that uses Python to generate database-driven websites.  It comes with SQLite preinstalled.

[Back to contents](#contents)

***
### How do I start a Django project?
To get started, you need to navigate to the directory where you would like to perform the install and run the install command via the terminal.

	django-admin startproject whateverNameOfProject

[Back to contents](#contents)

***
### How do I start the development server?

Enter the following terminal command in the project directory:

	python manage.py runserver

[Back to contents](#contents)

***
## URLs, Views and Templates
### What are URLs and Views in Django?
The urls.py file is where the paths/routes are configured and the views.py file is where the output of those paths is determined (via functions)

[Back to contents](#contents)

***
### How do I set up the urls.py file?
By default the main urls.py file has an admin path already included...

```python
urlpatterns = [
  path('admin/', admin.site.urls),
]
```

To add another URL follow insert the following inside the square brackets….

```python	
urlpatterns = [
  path('admin/', admin.site.urls),
  path('whateverpathname/', views.whateverPathName),
]
```

For the homepage, use the following path….

```python
path('', views.whateverHomepage),	
```

[Back to contents](#contents)

***
### Can I link my homepage to another section of my site?
Uh huh!  If you want to redirect the `''` (home) to a different view in your project (for example, you may want the homepage of a blog to be your article list), it is a simple process.  First, import the views from the relevant app.

```python
from articles import views as article_views	
```
> **IMPORTANT:** note that the 'as' is used to stop Django getting confused with any other views import statements

Then update the empty path (in other words the base path) like this...

```python	
path('', article_views.article_list, name="home"),
```

[Back to contents](#contents)

***
### How do I set up the views.py file?
Create a file called views.py inside the same directory as urls.py. In this file, create a function for all that are fired in the urls file (views.whateverPathName).

```python
def whateverPathName(request):
  return # something
```

Make sure to insert an import statement in the urls.py file.

```python	
from .import views
```

[Back to contents](#contents)

***
### How do I use HTML templates?
For every app (see below) create a folder called `templates` in the same directory that contains the views and urls files.  Create the HTML templates within this folder.

To use them in the project, go to the views.py and import the render method.

```python
from django.shortcuts import render
```

Then for each relevant view function in the views.py, insert the following return **render** statement….

```python
return render(request, 'pageName.html')
```

> **IMPORTANT**: Open the settings.py file and scroll to `TEMPLATES` section.  Within the `DIRS`, insert `“templates”`.

[Back to contents](#contents)

***
### How do I 'extend' templates?
Much like the 'include' in PHP, `{% block %}` tags can be used to avoid repeating code.

For example, in the main 'templates' folder, a file called 'base_layout.html' could contain the following code...

```django
<body>
  <div class="wrapper">
    {% block content %}
    <!-- This is where the content from other files will be inserted -->
    {% endblock %}
  </div>
</body>
</html>
```

Then in each file containing the variable content, we have to include the **extends** command to insert it into the base_layout.html.

```django
{% extends 'base_layout.html' %}
{% block content %}
  <h1>Article List</h1>
  <div class="articles">
    {% for article in articles %}
      <div class="article">
        <h2>{{ article.title }}</h2>
        <p>{{ article.snippet }}</p>
        <p>{{ article.date }}</p>
      </div>
    {% endfor %}
  </div>
{% endblock %}
```

[Back to contents](#contents)

***
### How can I use URL parameters?
In order to pass variable URL parameters to the urls.py, the RegEx functionality needs to be imported.

```python
from django.urls import path, re_path
```

Then, for example, a slug for a blog post can be obtained with the following regular expression...

```python
re_path('^(?P<slug>[\w-]+)/$', views.article_detail),
```

This regular expression returns a capture group (everything within the brackets after the capture group name) called `slug`.  This can then be accessed in the relevant views.py function by adding it as the 2nd parameter.

```python
def article_detail(request, slug):
  return #the slug can now be used
```

[Back to contents](#contents)

***
### How should I link to other parts of my site?
When linking to other parts of your website in your HTML templates, use **named URLs**. A URL **name** should be set as the 3rd parameter of the paths in your urls.py file.

```python
path('', views.article_list, name="list"),
re_path('^(?P<slug>[\w-]+)/$', views.article_detail, name="detail"),
```

You can now refer to these URL names in the HTML template using the **url** functionality in a template tag.

```django
<h1><a href="{% url 'list' %}">Article List</a></h1>
<h2><a href="{% url 'detail' slug=article.slug %}">{{ article.title }}</a></h2>
```
> **NOTE:** The slug URL parameter can be passed into the capture group in the urls.py file by setting it after the named URL.

It is also considered best practice to namespace urls by adding the `app_name` property to the urls.py.

```python
app_name = 'articles'
```

We can now refer to named URLs in HTML templates without the risk of name collisions.

```django
<h1><a href="{% url 'articles:list' %}">Article List</a></h1>
```

[Back to contents](#contents)

***
## Apps
### What is an app?
The typical structure of a Django website is split into 'apps'. For example, a blog would have an 'articles' app which would contain all the functionality relevant to creating/displaying articles.  It would also have an 'accounts' app which would contain all the functionality relevant to user logins/signups etc.

[Back to contents](#contents)

***
### How do I create a new app?
To create a Django app, navigate to the root project directory and type the following command in the terminal...

	python manage.py startapp whateverNameOfApp

This will generate the relevant files needed, although you will need to create a urls.py, so create that.

> **IMPORTANT:** Update the main `settings.py` file with the name of the app in the `INSTALLED_APPS` section.

```python
INSTALLED_APPS = [
  # all the others
  'articles',
]
```

[Back to contents](#contents)

***
### How should I structure my templates folder within apps?
When you create the templates folder within additional apps, create another directory within that and call it the same as the app name.  For example, if you create an 'articles' app, make the following folder structure...
```
articles 
└── templates
    └── articles
        └── article_list.html
```
Then you can avoid potential name collisions with other apps.

[Back to contents](#contents)

***
### How do I access the additional apps' URLs from the main urls.py?
To include the urls of the app within your main urls.py file (thus avoiding errors), open the main urls.py file and import the include function...
  
```python 
from django.urls import path, include
```

Then using the include function, the urls from the other urls.py files can be included...

```python	
path('articles/', include('articles.urls')),
```

[Back to contents](#contents)

***
## Models
### What is a model?
A model is a class which represents a table in a database
Each type of data (e.g. Articles, Users) is represented by its own model.  Each model maps to a single table in a database.

[Back to contents](#contents)

***
### Where are models defined?
Models are defined in a models.py file, within the relevant app directory.

[Back to contents](#contents)

***
### How are models defined?
Models are defined as classes.  The properties are defined as model fields.  Visit  https://docs.djangoproject.com/en/2.1/ref/models/fields/ for details of the available fields.  Below is an example...

```python
class Article(models.Model):
  title = models.CharField(max_length=100)
  slug = models.SlugField()
  body = models.TextField()
  date = models.DateTimeField(auto_now_add=True)
```

[Back to contents](#contents)

***
### Can I use methods in models?
Absolutely!  Methods can be stored inside models for useful functionality such as outputting a snippet for a blog.  To do this, create a method/function inside the model class like this...

```python	
def snippet(self):
  return self.body[:50] + '...'
  # This would return the first 50 characters of an article
```

> **NOTE:** You don't use a brackets call to this function in the HTML template tag.  e.g. `{% article.snippet %}`

[Back to contents](#contents)

***
### What about media?
Yep!! Before you can include media in models, a couple of properties need to be written into the settings.py so that you can tell Django where to store uploaded media to and where to retrieve it from.

```python
MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
```

Then in the relevant model, you can then add an ImageField.

```python
thumb = models.ImageField(default='default.png', blank=True)
# in this example a default image is set and blank=True denotes that it is not required
```

You can also use a FileField for file uploads.  Refer to the [Django docs](https://docs.djangoproject.com/en/2.1/ref/models/fields/#filefield) for details.

[Back to contents](#contents)

***
### How do I migrate models to the database?
Before a model can be used with a database it has to be **migrated**.  This involves running a terminal command in the app directory.

	python manage.py makemigrations

This prepares the data for migration to the database.  A further command is needed to perform the migration.

	python manage.py migrate

[Back to contents](#contents)

***
### What is ORM?
ORM stands for Object-relational mapping.  It is the way in which data can be used from databases within the Django app.

[Back to contents](#contents)

***
### How do I use ORM in my views?
There are ORM functions you can use in your views.py.

```python
# Returns all records of a model called Modelame stored in the database
ModelName.objects.all()


newModel = models.ModelName() # Create an instance of a model called ModelName and store it
newModel.save() # Save the data in the variable to the database
```

[Back to contents](#contents)

***
### How can I use models on the front end?
Easy!  In the view function (views.py), store the data in a variable.  For example...

```python
articles = Article.objects.all().order_by('date')
```

You could also use the **get** method to retrieve oore specific record...

```python
def article_detail(request, slug):
  article = Article.objects.get(slug=slug)
  # then a return statement
```

Then pass a dictionary of the data into the 3rd parameter of the **return render** method.  For example...

```python
return render(request, 'articles/article_list.html', { 'articles':articles })
```

Now you can use the data in the HTML template.

```django
<div class="articles">
  {% for article in articles %}
    <div class="article">
      <h2>{{ article.title }}</h2>
      <p>{{ article.body }}</p>
      <p>{{ article.date }}</p>
    </div>
  {% endfor %}
</div>
```

[Back to contents](#contents)

***
### How do I control how it displays in the admin area?
Add the following function to the model to control how it displays in the admin area...

```python	
def __str__(self):
  return self.whateverProperty
```

[Back to contents](#contents)

***
### Can I use properties from other models?
Yes sir!  You can do this by using **foreign keys**.  For example, you may want to include the author of an article from the User model.  Inside the models.py file where you want to use it, import the other model (in this case the built-in User model).

```python
from django.contrib.auth.models import User
```

Then, within the model class set the property using Django's `models.ForeignKey` functionality.

```python
class Article(models.Model):
  title = models.CharField(max_length=100)
  slug = models.SlugField()
  body = models.TextField()
  date = models.DateTimeField(auto_now_add=True)
  thumb = models.ImageField(default='default.png', blank=True)
  author = models.ForeignKey(User, on_delete=models.CASCADE, default=None) # <-- HERE
```

> **IMPORTANT:** Use `on_delete=models.CASCADE`, which is an SQL standard.  CASCADE means that if the referenced object is deleted (in this case the user), it will delete any associations to it like their articles.  `default=None` is just a safeguard, as a user would need to be logged in to create a post anyway.

Finally, in the view function, after checking if your data is valid create a save instance variable of the form (adding `commit=False` parameter - this will prepare the data to be saved to the database but not add it just yet), then attach the user property from the request to that instance and finally save it down to the database.

```python
def article_create(request):
  if request.method == 'POST':
    form = forms.CreateArticle(request.POST, request.FILES)
    if form.is_valid():
      instance = form.save(commit=False) # <--- The form is bundled into a variable with all the properties that aren't foreign keys
      instance.author = request.user # <-- Then the foreign key is attached
      instance.save() # <--- The form is now ready and saved
      return redirect('articles:list')
```

[Back to contents](#contents)

***
## Admin area
### What is the admin area?
The Admin area is where you can see and interact with the entries in the database.

[Back to contents](#contents)

***
### How do I create the main user (AKA superuser)?
To create a superuser type the following into the terminal...
  
	python manage.py createsuperuser

...and follow the prompts to set up.

[Back to contents](#contents)

***
### How do I view models in the admin area?
They need to be registered in the admin.py file, so first of all they need to be imported.

```python
from .models import WhateverModelName
```

Then they can be registered.

```python
admin.site.register(WhateverModelName)
```

[Back to contents](#contents)

***
## Static assets
### What are static assets?
Static assets relate to things like stylesheets, images, video and audio.

[Back to contents](#contents)

***
### How do I configure static assets?
#### In development (pre deployment)
First, you need to import the staticfiles_urlpatterns into your main urls.py file.

```python
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
```

Then, you need to append this functionality to the urlpatterns.

```python
urlpatterns += staticfiles_urlpatterns()
```

Then add the following path in the settings.py file to a tuple called STATICFILES_DIRS...

```python
STATICFILES_DIRS = (
  os.path.join(BASE_DIR, 'assets'),
)
```

Finally, create an 'assets' folder in the main project directory to store your static asset files.

***
#### In deployment (to pythonanywhere.com)
In the settings.py file, you need to set a STATIC_ROOT.

```python
STATIC_ROOT = os.path.join(BASE_DIR, 'assets')
```

Then, run the terminal **collectstatic** command

  pythonX.Y manage.py collectstatic

**NOTE:** Replace X and Y with the version of Python your website is running. e.g. python3.5

**NOTE:** This command needs to be run whenever you want to publish new versions of static files.

Finally, set up a static files mapping so that pythonanwhere can serve the files.  Details are on their website [here](https://help.pythonanywhere.com/pages/DjangoStaticFiles).

[Back to contents](#contents)

***
## Forms
### How do I set up a user signup form in Django?
Django comes with a built in User Creation Form (AKA User signup form).  To use it create a new app (call it something like 'accounts') and set it up as usual.  Then use the following import statement in the views.py file...
  
```python	
from django.contrib.auth.forms import UserCreationForm
```

Within the view method assign the UserCreationForm to a variable and pass it into the 3rd parameter of the return render.

```python
form = UserCreationForm()
return render(request, 'accounts/signup.html', {'form': form})
```

>	**IMPORTANT:** When embedding into the HTML template, it needs to be contained within normal `<form>` tags and a `<input type=submit>` needs to go in before the closing form tag.  The form method needs to be `post`. 

>	**IMPORTANT**: Include a **CSRF** (Cross-Site Request Forgery) token in the form.

```django
<form action="{% url 'accounts:signup' %}" method="post" class="site-form">
  {% csrf_token %}
  {{ form }}
  <input type="submit" value="Signup">
</form>
```

[Back to contents](#contents)

***
### How do I save users to the database?
First of all, you need to determine if the view function receives a `get` or `post` request. 

```python
def signup_view(request):
  if request.method == 'POST':
```

If it receives a `post` request then store the form in a variable and pass in the `POST` property from the `request`.

```python
def signup_view(request):
  if request.method == 'POST':
    form = UserCreationForm(request.POST)
```

Then, use the built-in form validation function to check there are no problems with the data and, if all is OK, save it the database.

```python
def signup_view(request):
  if request.method == 'POST':
    form = UserCreationForm(request.POST)
    if form.is_valid():
      form.save()
```

[Back to contents](#contents)

***
### How do I redirect the user after a successful form submission?
#### Basic
You can redirect the user to a particular link for the final return. This can be done with the redirect method, which needs to be imported along with the render method in the views.py file.

```python
from django.shortcuts import render, redirect
```

It can then be used after the `save()` function is called.

```python
return redirect('articles:list')
```

#### Using the 'next' functionality
If a user is redirected to the login form because they tried to access a page that is restricted to logged in users, Django will pass in a 'next' URL parameter showing the page they were trying to access.  To make use of this, we first need to grab hold of it in the HTML template and pass it into the login view function.

```django
{% if request.GET.next %}
  <input type="hidden" name="next" value="{{ request.GET.next }}">
{% endif %}
```

Then in the view function, add a check after successful login to see if there is a 'next' parameter in the POST request (fed through by the hidden input in the HTML form).  If there is, retrieve that detail using the `request.POST.get` method and redirect the user to it.

```python
def login_view(request):
  if request.method == 'POST':
    form = AuthenticationForm(data=request.POST)
    if form.is_valid():
      user = form.get_user()
      login(request, user)
      if 'next' in request.POST: # <--- check if 'next' is in the request
        return redirect(request.POST.get('next')) # <--- grab it and redirect
      else:
        return redirect('articles:list') # <-- default redirect link if no next
  else:
    form = AuthenticationForm()
  return render(request, 'accounts/login.html', {'form': form})
```

[Back to contents](#contents)

***
### What if the request to the view returning the form is a GET request?
If it's not a POST request (i.e. the page has just been loaded for a user to signup), then that needs to be set up in the else statement of the view function.  A full working example looks like this...

```python
def signup_view(request):
  if request.method == 'POST':
    form = UserCreationForm(request.POST) # form containing all the signup info
    if form.is_valid():
      form.save()
      return redirect('articles:list')
  else:
    form = UserCreationForm() # a blank form
  return render(request, 'accounts/signup.html', {'form': form})
```
>	**IMPORTANT:** The render statement should be outside the `else` statement to ensure proper handling for when the `is_valid` function returns `False`

[Back to contents](#contents)

***
### How do I set up a login form?
Again, Django has built-in forms and functionality for logging users in via their **AuthenticationForm**. Firstly, import the AuthenticationForm into the views.py in the same place as the UserCreationForm.

```python
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
```

Then in the view function, the syntax is slightly different to the **UserCreationForm** in that the request.POST is not the first expected parameter, so it needs the key of 'data' passed in.

```python
form = AuthenticationForm(data=request.POST)
```

[Back to contents](#contents)

***
### How do I log users into my app?
first include the import statement into the views.py file.

```python
from django.contrib.auth import login
```

Then within the `if form.is_valid():` block, get the user using the built-in `get_user()` method and store them in a variable and then you can execute the `login` function.

```python
def login_view(request):
  if request.method == 'POST':
    form = AuthenticationForm(data=request.POST)
    if form.is_valid():
      user = form.get_user()
      login(request, user) # <--HERE!
  else:
    form = AuthenticationForm()
  return render(request, 'accounts/login.html', {'form': form})
```

To log a user in directly after signup, it's very similar. The **UserCreationForm** `save` function returns the user, so just store that user in a variable and then use the same method.

```python
def signup_view(request):
  if request.method == 'POST':
    form = UserCreationForm(request.POST)
    if form.is_valid():
      user = form.save() # <-- user is stored
      login(request, user) # <-- new user is passed into login function
      return redirect('articles:list')
  else:
    form = UserCreationForm()
  return render(request, 'accounts/signup.html', {'form': form})
```

[Back to contents](#contents)

***
### How do I log users out of my app?
Similar to logging in, first include the import statement to access Django's logout functionality.

```python
from django.contrib.auth import login, logout
# just tag it onto the end of the login...
```

Then set up the view function to check for a POST request, use the built-in logout method and then redirect the user.

```python
if request.method == 'POST':
  logout(request)
  return redirect('articles:list')
```

When creating a logout button, put it within a form tag so that you can send a POST request

>	**IMPORTANT:** Don't forget the CSRF token!

```django
<form action="{% url 'accounts:logout' %}" method="post">
  {% csrf_token %}
  <button type="submit">Logout</button>
</form>
```

[Back to contents](#contents)

***
### Can I generate a form from a model?
Yes indeed!  Instead of hardcoding HTML form inputs into templates, use Django's model forms functionality.  To do this, first of all create a forms.py in the same directory as models.py.  Import the Django forms functions and the models from models.py.

```python
from django import forms
from .import models # '.import' means import from the same directory as this file
```

Then create a class extending the ModelForm from the imported forms functions.  Within that class, create another class called `Meta` to control the output and set a `model` variable and a list variable called `fields` like this example.

```python
class CreateArticle(forms.ModelForm):
  class Meta:
    model = models.Article
    fields = ['title', 'body', 'slug', 'thumb']
```

Now in the relevant HTML template, embed the form in the usual way.

> 	**IMPORTANT:** Insert within form tags, include a csrf_token and include a submit button.

```django
<form action="{% url 'articles:create' %}" method="post" enctype="multipart/form-data">
  <!-- the 'enctype' parameter is needed if sending uploads to the server -->
  {% csrf_token %}
  {{ form }}
  <input type="submit" value="Add Post">
</form>
```

Now in the view function, import the forms.py.

```python
from .import forms
```

Then, check if it receives a `post` request. If it does then create an instance of the form and pass in the POST and FILES (if form contains file uploads) from the request.

```python
def article_create(request):
  if request.method == 'POST':
    form = forms.CreateArticle(request.POST, request.FILES) # <-- HERE
    if form.is_valid():
      instance = form.save(commit=False)
      instance.author = request.user
      instance.save()
      return redirect('articles:list')
  return render(request, 'articles/article_create.html', {'form': form})
```

If it is a `get` request, you handle that with an `else` statement and create a blank instance of the form.

```python
def article_create(request):
  if request.method == 'POST':
    form = forms.CreateArticle(request.POST, request.FILES)
    if form.is_valid():
      instance = form.save(commit=False)
      instance.author = request.user
      instance.save()
      return redirect('articles:list')
  else: # <-- HERE
    form = forms.CreateArticle() # <-- Blank form
  return render(request, 'articles/article_create.html', {'form': form})
```

[Back to contents](#contents)

***
## Content restriction
Content can be hidden/shown depending on if the user is registered and logged in.

### How do I restrict access to pages?
To restrict access to a page based on whether the user has signed up, firstly import the `login_required` decorator in views.py.

```python
from django.contrib.auth.decorators import login_required
```

Then, add the decorator bove the view function.

```python
@login_required(login_url="/accounts/login/")
def article_create(request):
  return render(request, 'articles/article_create.html')
```

Now, only logged in users will be able to view this page.  If they aren't logged in, they will be redirected to the `login_url` in the decorator.

[Back to contents](#contents)

***
### How do I restrict access to content within pages?
Content within pages can also be shown or hidden depending on whether the user is logged in.  This requires the `user.is_authenticated` function within a template tag.

```django
<nav>
  <ul>
    {% if user.is_authenticated %}
    <li>
      <form action="{% url 'accounts:logout' %}" class="logout-link" method="post">
        {% csrf_token %}
        <button type="submit">Logout</button>
      </form>
    </li>
    <li>
      <a href="{% url 'articles:create' %}" class="highlight">New Article</a>
    </li>
    {% else %}
    <li>
      <a href="{% url 'accounts:login' %}">Login</a>
    </li>
    <li>
      <a href="{% url 'accounts:signup' %}">Signup</a>
    </li>
    {% endif %}
  </ul>
</nav>
```

[Back to contents](#contents)

***
## Deployment
Coming soon...

[Back to contents](#contents)

***

*DISCLAIMER: These are notes I have taken for my own personal use after completing various courses on the subject.  Please refer to the official documentation for comprehensive information*

&copy; 2019 David Andrews