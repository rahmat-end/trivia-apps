<?php

return [

    'paths' => ['api/*', 'sanctum/csrf-cookie', 'api'],

    'allowed_methods' => ['*'],

    'allowed_origins' => ['http://localhost:19006', '*', 'http://127.0.0.1:8001/api/google/redirect'],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*', 'http://localhost:19006'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,
];
