// Unless explicitly stated otherwise all files in this repository are licensed under the Apache 2.0 License.
//
// This product includes software developed at Datadog (https://www.datadoghq.com/). Copyright 2021 Datadog, Inc.

import { createHook } from './hook.js'

const { load, resolve, getFormat, getSource, initialize } = createHook(import.meta)

export { load, resolve, getFormat, getSource, initialize }
