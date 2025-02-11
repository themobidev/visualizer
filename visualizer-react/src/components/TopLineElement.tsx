export const GrayTopLineElement: React.FC = () => {
    return (
        <section className="page_topline ls ms table_section table_section_sm section_padding_top_5 section_padding_bottom_5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 text-center text-sm-left">
                        <div>
                            <i className="fa fa-clock-o rightpadding_5" aria-hidden="true"></i>
                            Opening Hours: Mon - Sat 8.00 - 18.00
                        </div>
                    </div>
                    <div className="col-sm-4 text-center text-sm-right greylinks">
                        <span className="rightpadding_10">Follow Us:</span>
                        <a className="social-icon color-icon socicon-facebook" href="#" title="Facebook"></a>
                        <a className="social-icon color-icon socicon-twitter" href="#" title="Twitter"></a>
                        <a className="social-icon color-icon socicon-google" href="#" title="Twitter"></a>
                        <a className="social-icon color-icon socicon-linkedin" href="#" title="Twitter"></a>
                        <a className="social-icon color-icon socicon-youtube" href="#" title="Youtube"></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const DarkTopLineElement: React.FC = () => {
    return (
        <section className="page_topline ds color table_section table_section_sm section_padding_top_5 section_padding_bottom_5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 text-center text-sm-left">
                        <div>
                            <i className="fa fa-clock-o rightpadding_5" aria-hidden="true"></i>
                            Opening Hours: Mon - Sat 8.00 - 18.00
                        </div>
                    </div>
                    <div className="col-sm-4 text-center text-sm-right greylinks">
                        <span className="rightpadding_10">Follow Us:</span>
                        <a className="social-icon color-icon socicon-facebook" href="#" title="Facebook"></a>
                        <a className="social-icon color-icon socicon-twitter" href="#" title="Twitter"></a>
                        <a className="social-icon color-icon socicon-google" href="#" title="Twitter"></a>
                        <a className="social-icon color-icon socicon-linkedin" href="#" title="Twitter"></a>
                        <a className="social-icon color-icon socicon-youtube" href="#" title="Youtube"></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const ColorTopLineElement: React.FC = () => {
    return (
        <section className="page_topline cs table_section table_section_sm section_padding_top_5 section_padding_bottom_5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 text-center text-sm-left">
                        <div>
                            <i className="fa fa-clock-o rightpadding_5" aria-hidden="true"></i>
                            Opening Hours: Mon - Sat 8.00 - 18.00
                        </div>
                    </div>
                    <div className="col-sm-4 text-center text-sm-right greylinks">
                        <span className="rightpadding_10">Follow Us:</span>
                        <a className="social-icon color-icon socicon-facebook" href="#" title="Facebook"></a>
                        <a className="social-icon color-icon socicon-twitter" href="#" title="Twitter"></a>
                        <a className="social-icon color-icon socicon-google" href="#" title="Twitter"></a>
                        <a className="social-icon color-icon socicon-linkedin" href="#" title="Twitter"></a>
                        <a className="social-icon color-icon socicon-youtube" href="#" title="Youtube"></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const GrayTopLineMenuElement: React.FC<{repeat?: number}> = ({repeat = 4}) => {
    return (
        <section className="page_topline ls ms table_section table_section_sm">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 text-center text-sm-left toppadding_10 bottompadding_10">
                        <span className="small-text rightpadding_10">Share:</span>
                        <a className="social-icon socicon-facebook" href="#" title="Facebook"></a>
                        <a className="social-icon socicon-twitter" href="#" title="Twitter"></a>
                        <a className="social-icon socicon-linkedin" href="#" title="Twitter"></a>
                        <a className="social-icon socicon-youtube" href="#" title="Youtube"></a>
                    </div>
                    <div className="col-sm-8 text-center text-sm-right">
                        <ul className="inline-list menu darklinks">
                            {Array.from({length: repeat}).map(() =><li><a href="#">Link ##</a></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const DarkTopLineMenuElement: React.FC<{repeat?: number}> = ({repeat = 4}) => {
    return (
        <section className="page_topline ds ms table_section table_section_sm">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 text-center text-sm-left toppadding_10 bottompadding_10">
                        <span className="small-text rightpadding_10">Share:</span>
                        <a className="social-icon socicon-facebook" href="#" title="Facebook"></a>
                        <a className="social-icon socicon-twitter" href="#" title="Twitter"></a>
                        <a className="social-icon socicon-linkedin" href="#" title="Twitter"></a>
                        <a className="social-icon socicon-youtube" href="#" title="Youtube"></a>
                    </div>
                    <div className="col-sm-8 text-center text-sm-right">
                        <ul className="inline-list menu darklinks">
                            {Array.from({length: repeat}).map(() =><li><a href="#">Link ##</a></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const FullwidthLightTopLineElement: React.FC = () => {
    return (
        <section className="page_topline ls table_section table_section_md">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-md-push-4 text-center text-sm-left text-md-center">
                        <a className="social-icon socicon-facebook" href="#" title="Facebook"></a>
                        <a className="social-icon socicon-twitter" href="#" title="Twitter"></a>
                        <a className="social-icon socicon-google" href="#" title="Twitter"></a>
                        <a className="social-icon socicon-linkedin" href="#" title="Twitter"></a>
                        <a className="social-icon socicon-youtube" href="#" title="Youtube"></a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-md-pull-4 text-center text-sm-right text-md-left">
                        <div className="inline-content medium">
                            <p><i className="fa fa-phone highlight rightpadding_5" aria-hidden="true"></i>1-888-123-4567</p>
                            <p className="greylinks">
                                <i className="fa fa-pencil highlight rightpadding_5" aria-hidden="true"></i>
                                <a href="mailto:dj_bishop@example.com">dj_bishop@example.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 text-center text-md-right">
                        <div className="widget widget_search">
                            <form method="get" className="searchform" action="./">
                                <div className="form-group margin_0">
                                    <label className="sr-only" htmlFor="widget-search">Search for:</label>
                                    <input id="widget-search" type="text" value="" name="search" className="form-control" placeholder="Search Keyword"/>
                                </div>
                                <button type="submit" className="theme_button no_bg_button color1">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const FullwidthDarkTopLineElement: React.FC = () => {
    return (
        <section className="page_topline ds table_section table_section_md">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-md-push-4 text-center text-sm-left text-md-center">
                        <a className="social-icon socicon-facebook" href="#" title="Facebook"></a>
                        <a className="social-icon socicon-twitter" href="#" title="Twitter"></a>
                        <a className="social-icon socicon-google" href="#" title="Twitter"></a>
                        <a className="social-icon socicon-linkedin" href="#" title="Twitter"></a>
                        <a className="social-icon socicon-youtube" href="#" title="Youtube"></a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-md-pull-4 text-center text-sm-right text-md-left">
                        <div className="inline-content medium">
                            <p><i className="fa fa-phone highlight rightpadding_5" aria-hidden="true"></i>1-888-123-4567</p>
                            <p className="greylinks">
                                <i className="fa fa-pencil highlight rightpadding_5" aria-hidden="true"></i>
                                <a href="mailto:dj_bishop@example.com">dj_bishop@example.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 text-center text-md-right">
                        <div className="widget widget_search">
                            <form method="get" className="searchform" action="./">
                                <div className="form-group margin_0">
                                    <label className="sr-only" htmlFor="widget-search">Search for:</label>
                                    <input id="widget-search" type="text" value="" name="search" className="form-control" placeholder="Search Keyword"/>
                                </div>
                                <button type="submit" className="theme_button no_bg_button color1">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default {
    GrayTopLineElement, 
    DarkTopLineElement, 
    ColorTopLineElement, 
    GrayTopLineMenuElement, 
    DarkTopLineMenuElement, 
    FullwidthLightTopLineElement, 
    FullwidthDarkTopLineElement
}