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

declare module 'react-isomorphic-render/page-server' {

    function WebPageServer(options: WebPageServer.WebPageServerOptions): void;

    namespace WebPageServer {
        interface WebPageServerOptions {
            development: boolean;
            port: number;
            web_server: {
                host: string,
                port: number
            };
            disable_server_side_rendering: boolean;
            assets(): {};
            [index: string]: Function|boolean|number|string|{};
        }
    }

    export = WebPageServer;
}

declare module 'react-isomorphic-render/redux' {

    class UniversalRedux {
        static createStore(reducers: {}, options: {}): { store: {}, reload: Function };
    }

    namespace UniversalRedux {
        function render(opt: any): any;
        function create_store(o: any, p: any): any;
    }

    export = UniversalRedux;
}
