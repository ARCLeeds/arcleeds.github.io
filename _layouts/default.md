<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{{ page.title }}</title>
  </head>
  <body>
    <nav>
      {% for item in site.data.navigation.menubar %}
      <ul>
        {%if item.subfolderitems == null%}
        <li><a href="{{ item.url }}">{{ item.title }}</a></li>
        {% else %}
        <li>{{ item.title }}</li>
        <ul>
        {% for entry in item.subfolderitems %}
          <li><a href="{{ entry.url }}">{{ entry.page }}</a></li>
        {% endfor %}
        </ul>
        {% endif %}
      </ul>
      {% endfor %}
    </nav>
{{ content }}
  </body>
</html>
