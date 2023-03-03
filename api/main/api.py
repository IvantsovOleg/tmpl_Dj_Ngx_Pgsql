from django.http import HttpResponse, JsonResponse


def api_response(request, param_id):
    return JsonResponse({'some': 'data', 'param_id': param_id})