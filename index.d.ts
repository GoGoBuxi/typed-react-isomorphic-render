declare module 'react-isomorphic-render' {
    function webPageServer(options: {}): void;

    namespace webPageServer {
        function head(title: any, description: any, meta: any);
    }

    export = webPageServer;
}
