// Copyright (c) 2016
//   ____        ____       ____             _
//  / ___| ___  / ___| ___ | __ ) _   ___  _(_)
// | |  _ / _ \| |  _ / _ \|  _ \| | | \ \/ / |
// | |_| | (_) | |_| | (_) | |_) | |_| |>  <| |
//  \____|\___/ \____|\___/|____/ \__,_/_/\_\_|
//
// Licensed under MIT.

declare module 'react-isomorphic-render' {
    function webPageServer(options: {}): void;

    namespace webPageServer {
        function head(title: any, description: any, meta: any);
    }

    export = webPageServer;
}
