/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const Gatherer = require('./gatherer');

class ServiceWorker extends Gatherer {
  beforePass(options) {
    const driver = options.driver;
    return driver
      .getServiceWorkerVersions()
      .then(data => {
        return {
          versions: data.versions
        };
      })
      .catch(err => {
        return {
          debugString: `Error in querying Service Worker status: ${err.message}`
        };
      }).then(artifact => {
        this.artifact = artifact;
      });
  }
}

module.exports = ServiceWorker;
