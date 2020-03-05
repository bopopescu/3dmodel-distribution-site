# -*- coding: utf-8 -*- #
# Copyright 2020 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""`gcloud service-directory services resolve` command."""

from __future__ import absolute_import
from __future__ import division
from __future__ import unicode_literals

from googlecloudsdk.api_lib.service_directory import services
from googlecloudsdk.calliope import base
from googlecloudsdk.command_lib.service_directory import flags
from googlecloudsdk.command_lib.service_directory import resource_args


@base.Hidden
class Resolve(base.Command):
  """Resolve a service."""

  @staticmethod
  def Args(parser):
    resource_args.AddServiceResourceArg(parser, 'to resolve.')
    flags.AddMaxEndpointsFlag(parser)
    flags.AddEndpointFilterFlag(parser)

  def Run(self, args):
    client = services.ServicesClient()
    service_ref = args.CONCEPTS.service.Parse()

    return client.Resolve(service_ref, args.max_endpoints, args.endpoint_filter)
