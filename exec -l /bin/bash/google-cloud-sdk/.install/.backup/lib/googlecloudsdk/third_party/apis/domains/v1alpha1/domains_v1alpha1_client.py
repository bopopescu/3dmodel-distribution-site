"""Generated client library for domains version v1alpha1."""
# NOTE: This file is autogenerated and should not be edited by hand.
from apitools.base.py import base_api
from googlecloudsdk.third_party.apis.domains.v1alpha1 import domains_v1alpha1_messages as messages


class DomainsV1alpha1(base_api.BaseApiClient):
  """Generated client library for service domains version v1alpha1."""

  MESSAGES_MODULE = messages
  BASE_URL = u'https://domains.googleapis.com/'
  MTLS_BASE_URL = u'https://domains.mtls.googleapis.com/'

  _PACKAGE = u'domains'
  _SCOPES = [u'https://www.googleapis.com/auth/cloud-platform']
  _VERSION = u'v1alpha1'
  _CLIENT_ID = '1042881264118.apps.googleusercontent.com'
  _CLIENT_SECRET = 'x_Tw5K8nnjoRAqULM9PFAC2b'
  _USER_AGENT = 'x_Tw5K8nnjoRAqULM9PFAC2b'
  _CLIENT_CLASS_NAME = u'DomainsV1alpha1'
  _URL_VERSION = u'v1alpha1'
  _API_KEY = None

  def __init__(self, url='', credentials=None,
               get_credentials=True, http=None, model=None,
               log_request=False, log_response=False,
               credentials_args=None, default_global_params=None,
               additional_http_headers=None, response_encoding=None):
    """Create a new domains handle."""
    url = url or self.BASE_URL
    super(DomainsV1alpha1, self).__init__(
        url, credentials=credentials,
        get_credentials=get_credentials, http=http, model=model,
        log_request=log_request, log_response=log_response,
        credentials_args=credentials_args,
        default_global_params=default_global_params,
        additional_http_headers=additional_http_headers,
        response_encoding=response_encoding)
    self.projects_locations_operations = self.ProjectsLocationsOperationsService(self)
    self.projects_locations_registrations_authorizationCode = self.ProjectsLocationsRegistrationsAuthorizationCodeService(self)
    self.projects_locations_registrations = self.ProjectsLocationsRegistrationsService(self)
    self.projects_locations = self.ProjectsLocationsService(self)
    self.projects = self.ProjectsService(self)

  class ProjectsLocationsOperationsService(base_api.BaseApiService):
    """Service class for the projects_locations_operations resource."""

    _NAME = u'projects_locations_operations'

    def __init__(self, client):
      super(DomainsV1alpha1.ProjectsLocationsOperationsService, self).__init__(client)
      self._upload_configs = {
          }

    def Get(self, request, global_params=None):
      r"""Gets the latest state of a long-running operation.  Clients can use this.
method to poll the operation result at intervals as recommended by the API
service.

      Args:
        request: (DomainsProjectsLocationsOperationsGetRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Operation) The response message.
      """
      config = self.GetMethodConfig('Get')
      return self._RunMethod(
          config, request, global_params=global_params)

    Get.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1alpha1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}',
        http_method=u'GET',
        method_id=u'domains.projects.locations.operations.get',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[],
        relative_path=u'v1alpha1/{+name}',
        request_field='',
        request_type_name=u'DomainsProjectsLocationsOperationsGetRequest',
        response_type_name=u'Operation',
        supports_download=False,
    )

    def List(self, request, global_params=None):
      r"""Lists operations that match the specified filter in the request. If the.
server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding
to use different resource name schemes, such as `users/*/operations`. To
override the binding, API services can add a binding such as
`"/v1/{name=users/*}/operations"` to their service configuration.
For backwards compatibility, the default name includes the operations
collection id, however overriding users must ensure the name binding
is the parent resource, without the operations collection id.

      Args:
        request: (DomainsProjectsLocationsOperationsListRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (ListOperationsResponse) The response message.
      """
      config = self.GetMethodConfig('List')
      return self._RunMethod(
          config, request, global_params=global_params)

    List.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1alpha1/projects/{projectsId}/locations/{locationsId}/operations',
        http_method=u'GET',
        method_id=u'domains.projects.locations.operations.list',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[u'filter', u'pageSize', u'pageToken'],
        relative_path=u'v1alpha1/{+name}/operations',
        request_field='',
        request_type_name=u'DomainsProjectsLocationsOperationsListRequest',
        response_type_name=u'ListOperationsResponse',
        supports_download=False,
    )

  class ProjectsLocationsRegistrationsAuthorizationCodeService(base_api.BaseApiService):
    """Service class for the projects_locations_registrations_authorizationCode resource."""

    _NAME = u'projects_locations_registrations_authorizationCode'

    def __init__(self, client):
      super(DomainsV1alpha1.ProjectsLocationsRegistrationsAuthorizationCodeService, self).__init__(client)
      self._upload_configs = {
          }

    def Reset(self, request, global_params=None):
      r"""Resets the Authorization Code of the registration.
Can only be called after 60 days have elapsed since initial registration.

      Args:
        request: (DomainsProjectsLocationsRegistrationsAuthorizationCodeResetRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (AuthorizationCode) The response message.
      """
      config = self.GetMethodConfig('Reset')
      return self._RunMethod(
          config, request, global_params=global_params)

    Reset.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1alpha1/projects/{projectsId}/locations/{locationsId}/registrations/{registrationsId}/authorizationCode:reset',
        http_method=u'POST',
        method_id=u'domains.projects.locations.registrations.authorizationCode.reset',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[],
        relative_path=u'v1alpha1/{+name}/authorizationCode:reset',
        request_field=u'resetAuthorizationCodeRequest',
        request_type_name=u'DomainsProjectsLocationsRegistrationsAuthorizationCodeResetRequest',
        response_type_name=u'AuthorizationCode',
        supports_download=False,
    )

  class ProjectsLocationsRegistrationsService(base_api.BaseApiService):
    """Service class for the projects_locations_registrations resource."""

    _NAME = u'projects_locations_registrations'

    def __init__(self, client):
      super(DomainsV1alpha1.ProjectsLocationsRegistrationsService, self).__init__(client)
      self._upload_configs = {
          }

    def CheckAvailability(self, request, global_params=None):
      r"""Checks for availability of the given domain name.

      Args:
        request: (DomainsProjectsLocationsRegistrationsCheckAvailabilityRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (CheckDomainAvailabilityResponse) The response message.
      """
      config = self.GetMethodConfig('CheckAvailability')
      return self._RunMethod(
          config, request, global_params=global_params)

    CheckAvailability.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1alpha1/projects/{projectsId}/locations/{locationsId}/registrations:checkAvailability',
        http_method=u'GET',
        method_id=u'domains.projects.locations.registrations.checkAvailability',
        ordered_params=[u'parent'],
        path_params=[u'parent'],
        query_params=[u'domainName'],
        relative_path=u'v1alpha1/{+parent}/registrations:checkAvailability',
        request_field='',
        request_type_name=u'DomainsProjectsLocationsRegistrationsCheckAvailabilityRequest',
        response_type_name=u'CheckDomainAvailabilityResponse',
        supports_download=False,
    )

    def Create(self, request, global_params=None):
      r"""Creates a new Registration, i.e. attempts to register the domain, in a.
given project and location

      Args:
        request: (DomainsProjectsLocationsRegistrationsCreateRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Operation) The response message.
      """
      config = self.GetMethodConfig('Create')
      return self._RunMethod(
          config, request, global_params=global_params)

    Create.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1alpha1/projects/{projectsId}/locations/{locationsId}/registrations',
        http_method=u'POST',
        method_id=u'domains.projects.locations.registrations.create',
        ordered_params=[u'parent'],
        path_params=[u'parent'],
        query_params=[u'validateOnly'],
        relative_path=u'v1alpha1/{+parent}/registrations',
        request_field=u'registration',
        request_type_name=u'DomainsProjectsLocationsRegistrationsCreateRequest',
        response_type_name=u'Operation',
        supports_download=False,
    )

    def Delete(self, request, global_params=None):
      r"""Deletes a single Registration.
Can only be called on Registrations in state DETACHED with expire_time
in the past.

      Args:
        request: (DomainsProjectsLocationsRegistrationsDeleteRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Operation) The response message.
      """
      config = self.GetMethodConfig('Delete')
      return self._RunMethod(
          config, request, global_params=global_params)

    Delete.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1alpha1/projects/{projectsId}/locations/{locationsId}/registrations/{registrationsId}',
        http_method=u'DELETE',
        method_id=u'domains.projects.locations.registrations.delete',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[],
        relative_path=u'v1alpha1/{+name}',
        request_field='',
        request_type_name=u'DomainsProjectsLocationsRegistrationsDeleteRequest',
        response_type_name=u'Operation',
        supports_download=False,
    )

    def Detach(self, request, global_params=None):
      r"""Detach a Registration from Cloud Domains management, leaving it registered.
at Google Domains registrar.

      Args:
        request: (DomainsProjectsLocationsRegistrationsDetachRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Operation) The response message.
      """
      config = self.GetMethodConfig('Detach')
      return self._RunMethod(
          config, request, global_params=global_params)

    Detach.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1alpha1/projects/{projectsId}/locations/{locationsId}/registrations/{registrationsId}:detach',
        http_method=u'POST',
        method_id=u'domains.projects.locations.registrations.detach',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[],
        relative_path=u'v1alpha1/{+name}:detach',
        request_field=u'detachRegistrationRequest',
        request_type_name=u'DomainsProjectsLocationsRegistrationsDetachRequest',
        response_type_name=u'Operation',
        supports_download=False,
    )

    def Get(self, request, global_params=None):
      r"""Gets details of a single Registration.

      Args:
        request: (DomainsProjectsLocationsRegistrationsGetRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Registration) The response message.
      """
      config = self.GetMethodConfig('Get')
      return self._RunMethod(
          config, request, global_params=global_params)

    Get.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1alpha1/projects/{projectsId}/locations/{locationsId}/registrations/{registrationsId}',
        http_method=u'GET',
        method_id=u'domains.projects.locations.registrations.get',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[],
        relative_path=u'v1alpha1/{+name}',
        request_field='',
        request_type_name=u'DomainsProjectsLocationsRegistrationsGetRequest',
        response_type_name=u'Registration',
        supports_download=False,
    )

    def GetAuthorizationCode(self, request, global_params=None):
      r"""Gets Authorization Code of a Registration.
Can only be called after 60 days have elapsed since initial registration.

      Args:
        request: (DomainsProjectsLocationsRegistrationsGetAuthorizationCodeRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (AuthorizationCode) The response message.
      """
      config = self.GetMethodConfig('GetAuthorizationCode')
      return self._RunMethod(
          config, request, global_params=global_params)

    GetAuthorizationCode.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1alpha1/projects/{projectsId}/locations/{locationsId}/registrations/{registrationsId}/authorizationCode',
        http_method=u'GET',
        method_id=u'domains.projects.locations.registrations.getAuthorizationCode',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[],
        relative_path=u'v1alpha1/{+name}/authorizationCode',
        request_field='',
        request_type_name=u'DomainsProjectsLocationsRegistrationsGetAuthorizationCodeRequest',
        response_type_name=u'AuthorizationCode',
        supports_download=False,
    )

    def GetIamPolicy(self, request, global_params=None):
      r"""Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.

      Args:
        request: (DomainsProjectsLocationsRegistrationsGetIamPolicyRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Policy) The response message.
      """
      config = self.GetMethodConfig('GetIamPolicy')
      return self._RunMethod(
          config, request, global_params=global_params)

    GetIamPolicy.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1alpha1/projects/{projectsId}/locations/{locationsId}/registrations/{registrationsId}:getIamPolicy',
        http_method=u'GET',
        method_id=u'domains.projects.locations.registrations.getIamPolicy',
        ordered_params=[u'resource'],
        path_params=[u'resource'],
        query_params=[u'options_requestedPolicyVersion'],
        relative_path=u'v1alpha1/{+resource}:getIamPolicy',
        request_field='',
        request_type_name=u'DomainsProjectsLocationsRegistrationsGetIamPolicyRequest',
        response_type_name=u'Policy',
        supports_download=False,
    )

    def List(self, request, global_params=None):
      r"""Lists Registrations in a given project.

      Args:
        request: (DomainsProjectsLocationsRegistrationsListRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (ListRegistrationsResponse) The response message.
      """
      config = self.GetMethodConfig('List')
      return self._RunMethod(
          config, request, global_params=global_params)

    List.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1alpha1/projects/{projectsId}/locations/{locationsId}/registrations',
        http_method=u'GET',
        method_id=u'domains.projects.locations.registrations.list',
        ordered_params=[u'parent'],
        path_params=[u'parent'],
        query_params=[u'filter', u'pageSize', u'pageToken'],
        relative_path=u'v1alpha1/{+parent}/registrations',
        request_field='',
        request_type_name=u'DomainsProjectsLocationsRegistrationsListRequest',
        response_type_name=u'ListRegistrationsResponse',
        supports_download=False,
    )

    def Patch(self, request, global_params=None):
      r"""Updates a Registration.

      Args:
        request: (DomainsProjectsLocationsRegistrationsPatchRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Operation) The response message.
      """
      config = self.GetMethodConfig('Patch')
      return self._RunMethod(
          config, request, global_params=global_params)

    Patch.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1alpha1/projects/{projectsId}/locations/{locationsId}/registrations/{registrationsId}',
        http_method=u'PATCH',
        method_id=u'domains.projects.locations.registrations.patch',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[u'updateMask', u'validateOnly'],
        relative_path=u'v1alpha1/{+name}',
        request_field=u'registration',
        request_type_name=u'DomainsProjectsLocationsRegistrationsPatchRequest',
        response_type_name=u'Operation',
        supports_download=False,
    )

    def SearchAvailability(self, request, global_params=None):
      r"""Searches available domains similar to the given query.
Returned domain availability allows some staleness.

      Args:
        request: (DomainsProjectsLocationsRegistrationsSearchAvailabilityRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (SearchDomainAvailabilityResponse) The response message.
      """
      config = self.GetMethodConfig('SearchAvailability')
      return self._RunMethod(
          config, request, global_params=global_params)

    SearchAvailability.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1alpha1/projects/{projectsId}/locations/{locationsId}/registrations:searchAvailability',
        http_method=u'GET',
        method_id=u'domains.projects.locations.registrations.searchAvailability',
        ordered_params=[u'parent'],
        path_params=[u'parent'],
        query_params=[u'query'],
        relative_path=u'v1alpha1/{+parent}/registrations:searchAvailability',
        request_field='',
        request_type_name=u'DomainsProjectsLocationsRegistrationsSearchAvailabilityRequest',
        response_type_name=u'SearchDomainAvailabilityResponse',
        supports_download=False,
    )

    def SetIamPolicy(self, request, global_params=None):
      r"""Sets the access control policy on the specified resource. Replaces any.
existing policy.

Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED

      Args:
        request: (DomainsProjectsLocationsRegistrationsSetIamPolicyRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Policy) The response message.
      """
      config = self.GetMethodConfig('SetIamPolicy')
      return self._RunMethod(
          config, request, global_params=global_params)

    SetIamPolicy.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1alpha1/projects/{projectsId}/locations/{locationsId}/registrations/{registrationsId}:setIamPolicy',
        http_method=u'POST',
        method_id=u'domains.projects.locations.registrations.setIamPolicy',
        ordered_params=[u'resource'],
        path_params=[u'resource'],
        query_params=[],
        relative_path=u'v1alpha1/{+resource}:setIamPolicy',
        request_field=u'setIamPolicyRequest',
        request_type_name=u'DomainsProjectsLocationsRegistrationsSetIamPolicyRequest',
        response_type_name=u'Policy',
        supports_download=False,
    )

    def TestIamPermissions(self, request, global_params=None):
      r"""Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.

Note: This operation is designed to be used for building permission-aware
UIs and command-line tools, not for authorization checking. This operation
may "fail open" without warning.

      Args:
        request: (DomainsProjectsLocationsRegistrationsTestIamPermissionsRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (TestIamPermissionsResponse) The response message.
      """
      config = self.GetMethodConfig('TestIamPermissions')
      return self._RunMethod(
          config, request, global_params=global_params)

    TestIamPermissions.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1alpha1/projects/{projectsId}/locations/{locationsId}/registrations/{registrationsId}:testIamPermissions',
        http_method=u'POST',
        method_id=u'domains.projects.locations.registrations.testIamPermissions',
        ordered_params=[u'resource'],
        path_params=[u'resource'],
        query_params=[],
        relative_path=u'v1alpha1/{+resource}:testIamPermissions',
        request_field=u'testIamPermissionsRequest',
        request_type_name=u'DomainsProjectsLocationsRegistrationsTestIamPermissionsRequest',
        response_type_name=u'TestIamPermissionsResponse',
        supports_download=False,
    )

  class ProjectsLocationsService(base_api.BaseApiService):
    """Service class for the projects_locations resource."""

    _NAME = u'projects_locations'

    def __init__(self, client):
      super(DomainsV1alpha1.ProjectsLocationsService, self).__init__(client)
      self._upload_configs = {
          }

    def Get(self, request, global_params=None):
      r"""Gets information about a location.

      Args:
        request: (DomainsProjectsLocationsGetRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Location) The response message.
      """
      config = self.GetMethodConfig('Get')
      return self._RunMethod(
          config, request, global_params=global_params)

    Get.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1alpha1/projects/{projectsId}/locations/{locationsId}',
        http_method=u'GET',
        method_id=u'domains.projects.locations.get',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[],
        relative_path=u'v1alpha1/{+name}',
        request_field='',
        request_type_name=u'DomainsProjectsLocationsGetRequest',
        response_type_name=u'Location',
        supports_download=False,
    )

    def List(self, request, global_params=None):
      r"""Lists information about the supported locations for this service.

      Args:
        request: (DomainsProjectsLocationsListRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (ListLocationsResponse) The response message.
      """
      config = self.GetMethodConfig('List')
      return self._RunMethod(
          config, request, global_params=global_params)

    List.method_config = lambda: base_api.ApiMethodInfo(
        flat_path=u'v1alpha1/projects/{projectsId}/locations',
        http_method=u'GET',
        method_id=u'domains.projects.locations.list',
        ordered_params=[u'name'],
        path_params=[u'name'],
        query_params=[u'filter', u'includeUnrevealedLocations', u'pageSize', u'pageToken'],
        relative_path=u'v1alpha1/{+name}/locations',
        request_field='',
        request_type_name=u'DomainsProjectsLocationsListRequest',
        response_type_name=u'ListLocationsResponse',
        supports_download=False,
    )

  class ProjectsService(base_api.BaseApiService):
    """Service class for the projects resource."""

    _NAME = u'projects'

    def __init__(self, client):
      super(DomainsV1alpha1.ProjectsService, self).__init__(client)
      self._upload_configs = {
          }
