import React, { Component } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
class SeoHead extends Component {


    render() {
        return (
            <div>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                    <link rel="shortcut icon" href="/static/img/fav.png" />

                    <meta name="author" content="CodePixar" />

                    <meta name="description" content="" />

                    <meta name="keywords" content="" />

                    <meta charset="UTF-8" />

                    <title>Karma Shop</title>
                    <link rel="stylesheet" href="/static/css/linearicons.css" />
                    <link rel="stylesheet" href="/static/css/owl.carousel.css" />
                    <link rel="stylesheet" href="/static/css/themify-icons.css" />
                    <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="/static/css/nice-select.css" />
                    <link rel="stylesheet" href="/static/css/nouislider.min.css" />
                    <link rel="stylesheet" href="/static/css/bootstrap.css" />
                    <link rel="stylesheet" href="/static/css/main.css" />
                    <meta name="title" content={this.props.seoData.title} />
                    <meta name="description" content="jkl" />
                </Head>
            </div>
        );
    }

}


export default connect((state) => {
    return {
        seoData: state.seoReducer.seoHeaderData
    };
})(SeoHead);