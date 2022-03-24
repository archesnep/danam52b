from danam.danamforms import MonumentOfMonthUploadForm
from danam.models import MonumentOfMonth
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse_lazy
from django.views.generic import (CreateView, DeleteView, DetailView, ListView,
                                  UpdateView)


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


def bhurticomplex(request):
    return render(request, 'partials/feature_search/bhurti.htm')


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


def phudyah_dipankara(request):
    return render(request, 'partials/phudyah_dipankara.html')



def heritage_walks(request):
    return render(request, 'partials/heritage-walk.htm')


class MonumentOfMonthCreateView(CreateView):
    def get(self, request, *args, **kwargs):
        context = {'form': MonumentOfMonthUploadForm()}
        return render(request, 'MoM/upload_MOM.htm', context)

    def post(self, request, *args, **kwargs):
        form = MonumentOfMonthUploadForm(request.POST, request.FILES)
        if form.is_valid():
            mom = form.save()
            mom.save()
            messages.success(
                request, "Monument of the month has been successfully created.")
            return HttpResponseRedirect(reverse_lazy('mom-list'))
        else:
            messages.error(request, 'Invalid form submission.')
            messages.error(request, form.errors)
        return render(request, 'MoM/upload_MOM.htm', {'form': form})


class MonumentOfMonthListView(ListView):
    model = MonumentOfMonth
    context_object_name = 'monument_list'
    queryset = MonumentOfMonth.objects.filter(status='p')
    success_url = reverse_lazy('mom-list')
    template_name = 'MoM/mom_list.htm'


class MonumentOfMonthDetailView(DetailView):
    model = MonumentOfMonth
    template_name = 'MoM/mom_details.htm'
    context_object_name = 'monument'

    # override the default id get_object method to uuid
    def get_object(self, queryset=None):
        return MonumentOfMonth.objects.get(uuid=self.kwargs.get("uuid"))


class MonumentOfMonthUpdateView(UpdateView):
    model = MonumentOfMonth
    form_class = MonumentOfMonthUploadForm
    slug_url_kwarg = 'uuid'
    slug_field = 'uuid'
    template_name = 'MoM/update_MOM.htm'
    success_url = reverse_lazy('mom-list')

    def get_initial(self):
        initial = super(MonumentOfMonthUpdateView, self).get_initial()
        return initial

    def get_object(self, *args, **kwargs):
        monument = get_object_or_404(MonumentOfMonth, uuid=self.kwargs['uuid'])
        return monument


class MonumentOfMonthDeleteView(DeleteView):
    model = MonumentOfMonth
    slug_url_kwarg = 'uuid'
    slug_field = 'uuid'
    context_object_name = 'monument'
    success_url = reverse_lazy('mom-list')
    template_name = 'MoM/confirm_delete.htm'
