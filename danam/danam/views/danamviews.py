from django.shortcuts import render
from django.contrib.auth.decorators import login_required


def danam(request):
    from django.db import connection

    cursor = connection.cursor()
    cursor.execute(
        """select count(*) from  resource_instances where graphid = 'f35cc1ca-9322-11e9-a5cc-0242ac120006';""")
    m_count = cursor.fetchone()
    print(m_count[0])
    cursor.execute(
        """select count(*) from tiles, resource_instances where 
        tiles.resourceinstanceid = resource_instances.resourceinstanceid 
        and graphid = 'f35cc1ca-9322-11e9-a5cc-0242ac120006' 
        and tiledata -> '4b84bd80-9eea-11e9-8b93-0242ac120006' is not null;""")
    o_count = cursor.fetchone()
    print(o_count[0])
    context = {
        "m_count": m_count[0],
        "o_count": o_count[0]
    }
    return render(request, 'partials/danam.htm', context)


def nhdp(request):
    return render(request, 'partials/nhdp.htm')


@login_required
def glossary(request):
    return render(request, 'glossary/glossary.html')


def date_conversion(request):
    return render(request, 'partials/dcc.htm')


def monument_of_month(request):
    return render(request, 'partials/monument-of-the-month.htm')


def design(request):
    return render(request, 'partials/design.htm')


def pimbahal(request):
    return render(request, 'partials/feature_search/pimbahal.htm')


def cyasal(request):
    return render(request, 'partials/feature_search/cyasal.htm')


def associated_project(request):
    return render(request, 'partials/associated_project.htm')


def feedback(request):
    return render(request, 'partials/feedback.htm')


def heritage_focus(request):
    return render(request, 'partials/heritage_focus_area.htm')


def how_we_work(request):
    return render(request, 'partials/how_we_work.htm')


def how_to_search(request):
    return render(request, 'partials/how_to_search.htm')


def published_articles(request):
    return render(request, 'partials/published_articles.htm')
