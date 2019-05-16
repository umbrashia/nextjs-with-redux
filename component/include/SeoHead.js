import React, { Component } from 'react';
import Head from 'next/head';
class SeoHead extends Component {


    render() {
        return (
            <div>
                <Head>
                    <title>jaii hooo</title>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
                    <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="YjdiNWIyOTUtZTIyMy00MWMwLTkwNDUtMzI1M2M2NTgxYjE0" id="snipcart"></script>
                    <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
                    <link href="/static/main.css" rel="stylesheet" />
                    <meta name="title" content="qwerty" />
                    <meta name="description" content="jkl" />
                </Head>
            </div>
        );
    }

}


export default SeoHead;