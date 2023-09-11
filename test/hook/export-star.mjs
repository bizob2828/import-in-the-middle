// Unless explicitly stated otherwise all files in this repository are licensed under the Apache 2.0 License.
//
// This product includes software developed at Datadog (https://www.datadoghq.com/). Copyright 2021 Datadog, Inc.

import Hook from '../../index.js'
import { strictEqual } from 'assert'

Hook((exports, name) => {
  if (name.match(/sub-star\.mjs/)) {
    const orig = exports.hello
    exports.hello = function wrappedHello(name) {
      return orig(name) + ' wrapped'
    }
  }
})

;(async() => {
  const { hello: hello2 } = await import('../fixtures/export-star.mjs')
  const { hello } = await import('../fixtures/sub-star.mjs')
  const res = hello('iitm')
  const res2 = hello2('iitm')
  strictEqual(res, 'Hello iitm wrapped')
  strictEqual(res, res2)
})()


