import ele from './tools/ele.js';
import fade from './tools/fade.js';
import betterFetch from './tools/betterFetch.js';
import Opacity from './tools/opacity.js';
import ScrollTo from './tools/scrollTo.js';

__webpack_public_path__ = window.mdxPublicPath;

const HTMLScrollTo = new ScrollTo('document');
//Toggle TitleBar's Classes and "Scroll To the Top" Bottom's Classes
var whetherChange = 0;
var whetherChangeToTop = 0;
var blogName = ele('div.mdui-toolbar > a.mdui-typo-headline').innerHTML;
var postTitle = ele('div.PostTitle h1').innerText;
var blogUrl = ele('div.mdui-toolbar > a.mdui-typo-headline').getAttribute('href');
var metaColor = document.querySelector("meta[name='theme-color']");
var colorEnabled = false;
var nowColor = '';
var imgRaw;
if (metaColor) {
    nowColor = document.querySelector("meta[name='mdx-main-color']").getAttribute('content');
    colorEnabled = true;
}
var urlHash = window.location.href;
var ticking = false;
var winheight = window.innerHeight;
var winwidth = document.body.clientWidth;
var ifOffline = typeof offlineMode === 'undefined' ? false : offlineMode;
if (document.getElementsByClassName('PostMain2').length > 0) {
    var postStyle2 = true;
} else {
    var postStyle2 = false;
}
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(scrollDiff);
        ticking = true;
    }
})
window.addEventListener('resize', () => {
    winheight = window.innerHeight;
    winwidth = document.body.clientWidth;
})
function scrollDiff() {
    var howFar = document.documentElement.scrollTop || document.body.scrollTop;
    if (howFar > 20 & whetherChange == 0 && !postStyle2) {
        ele("#titleBarinPost").classList.toggle("mdui-shadow-2");
        ele("div.mdui-toolbar.mdui-appbar-fixed", (e) => { e.classList.toggle("mdui-color-theme") });
        whetherChange = 1;
    }
    if (howFar <= 20 & whetherChange == 1 && !postStyle2) {
        ele("#titleBarinPost").classList.toggle("mdui-shadow-2");
        ele("div.mdui-toolbar.mdui-appbar-fixed", (e) => { e.classList.toggle("mdui-color-theme") });
        whetherChange = 0;
    }
    if (howFar > 200 & whetherChangeToTop == 0 && !postStyle2) {
        ele(".scrollToTop").classList.toggle("mdui-fab-hide");
        ele("div.mdui-toolbar > a.mdui-typo-headline").innerHTML = postTitle;
        ele("div.mdui-toolbar > a.mdui-typo-headline").removeAttribute("href");
        ele("#indic").style.transform = "scale(1) translateZ(0)";
        whetherChangeToTop = 1;
    }
    if (howFar <= 200 & whetherChangeToTop == 1 && !postStyle2) {
        ele(".scrollToTop").classList.toggle("mdui-fab-hide");
        ele("div.mdui-toolbar > a.mdui-typo-headline").innerHTML = blogName;
        ele("div.mdui-toolbar > a.mdui-typo-headline").setAttribute("href", blogUrl);
        ele("#indic").style.transform = "scale(0) translateZ(0)";
        whetherChangeToTop = 0;
    }

    if (postStyle2) {
        if (howFar > (winheight * 0.4 - 64) && whetherChangeToTop == 0) {
            ele(".mdui-toolbar", (e) => { e.classList.toggle("mdui-color-theme") });
            ele(".scrollToTop").classList.toggle("mdui-fab-hide");
            ele("#titleBarinPost").classList.toggle("mdui-shadow-2");
            ele("div.mdui-toolbar > a.mdui-typo-headline").innerHTML = postTitle;
            ele("div.mdui-toolbar > a.mdui-typo-headline").removeAttribute("href");
            ele("#indic").style.transform = "scale(1) translateZ(0)";
            whetherChangeToTop = 1;
        } else if (howFar <= (winheight * 0.4 - 64) && whetherChangeToTop == 1) {
            ele(".mdui-toolbar", (e) => { e.classList.toggle("mdui-color-theme") });
            ele(".scrollToTop").classList.toggle("mdui-fab-hide");
            ele("#titleBarinPost").classList.toggle("mdui-shadow-2");
            ele("div.mdui-toolbar > a.mdui-typo-headline").innerHTML = blogName;
            ele("div.mdui-toolbar > a.mdui-typo-headline").setAttribute("href", blogUrl);
            ele("#indic").style.transform = "scale(0) translateZ(0)";
            whetherChangeToTop = 0;
        }
    }

    if (document.getElementsByClassName("ArtMain").length > 0) {
        var postHight = ele(".ArtMain").getBoundingClientRect().height + ele(".ArtMain").getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientHeight;
    } else {
        var postHight = ele("article.mdui-typo").getBoundingClientRect().height + ele("article.mdui-typo").getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientHeight;
    }
    var nowPro = howFar / postHight * 100;
    if (nowPro < 100) {
        if (ind) {
            ind.value(nowPro);
        }
    } else if (nowPro >= 100) {
        if (ind) {
            ind.value(100);
        }
    }
    ticking = false;
};

window.addEventListener("load", () => {
    init_wp_block();
    fade(ele('body > .mdui-progress', null, 'array'), 'out', 200);
    document.querySelectorAll('.wp-block-mdx-fold').forEach((item) => {
        item.setAttribute('mdui-panel', '');
    });
    mdui.$(".wp-block-mdx-fold").mutation();
    if (ifscr == 1) {
        var query = GetQueryString("_pro");
        if (query) {
            if (query.indexOf("v2") !== -1) {
                var newpro = query.split(":");
                var DOMlist = document.querySelectorAll(".PostMain article.mdui-typo > *");
                if (DOMlist[parseInt(newpro[1])]) {
                    var scro = DOMlist[parseInt(newpro[1])].offsetHeight * parseFloat(newpro[2]) + DOMlist[parseInt(newpro[1])].offsetTop;
                    if (scro > 200) {
                        HTMLScrollTo.to(scro, 700);
                        mdui.snackbar({
                            message: snbar_message,
                            buttonText: snbar_buttonText,
                            timeout: 10000,
                            onButtonClick: () => {
                                HTMLScrollTo.to(0, 700);
                            },
                        });
                    }
                } else {
                    backupPro(newpro[3]);
                }
            } else {
                backupPro(query);
            }
        }
    }
    setTimeout(mdx_shortcode, 1000);
})

function backupPro(query) {
    var oldpro = parseFloat(query);
    if (document.getElementsByClassName("ArtMain").length > 0) {
        var postHight3 = ele(".ArtMain").getBoundingClientRect().height + ele(".ArtMain").getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientHeight;
    } else {
        var postHight3 = ele("article.mdui-typo").getBoundingClientRect().height + ele("article.mdui-typo").getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientHeight;
    }
    var scro = postHight3 * oldpro;
    if (scro > 200) {
        HTMLScrollTo.to(scro, 700);
        mdui.snackbar({
            message: snbar_message,
            buttonText: snbar_buttonText,
            timeout: 10000,
            onButtonClick: () => {
                HTMLScrollTo.to(0, 700);
            },
        });
    }
}

function init_wp_block() {
    if (document.querySelectorAll("*[class*='wp-block-']").length > 0) {
        ele(".wp-block-button", (e) => {
            e.style.marginBottom = "1.2em";
            e.classList.remove("wp-block-button");
        });
        ele("a.wp-block-button__link", (e) => {
            e.classList.remove("wp-block-button__link");
            e.classList.add("mdui-btn", "mdui-color-theme-accent", "mdui-ripple");
        });
        ele("a.wp-block-file__button", (e) => {
            e.classList.remove("wp-block-file__button");
            e.classList.add("mdui-btn", "mdui-color-theme-accent", "mdui-ripple");
        });
        ele(".wp-block-file", (e) => {
            e.insertAdjacentHTML('afterbegin', '<i class="mdui-icon material-icons">&#xe24d;</i>');
        });
        ele(".wp-block-pullquote", (e) => {
            e.classList.remove("wp-block-pullquote");
        });
        ele(".wp-block-table", (e) => {
            const table = e.getElementsByTagName('table');
            if (table.length > 0) {
                table[0].classList.add("mdui-table", "mdx-dny-table", "mdui-table-hoverable");
                const wrapper = document.createElement('div');
                wrapper.classList.add('mdui-table-fluid');
                e.parentNode.insertBefore(wrapper, e);
                wrapper.appendChild(table[0]);
                const figcaption = e.getElementsByTagName('figcaption');
                if (figcaption.length > 0) {
                    const figure = document.createElement('figure');
                    wrapper.parentNode.insertBefore(figure, wrapper);
                    figure.appendChild(wrapper);
                    figure.appendChild(figcaption[0]);
                }
                e.parentNode.removeChild(e);
            } else {
                e.classList.remove("wp-block-table", "has-subtle-pale-blue-background-color", "has-background", "is-style-stripes", "has-fixed-layout", "is-style-regular", "has-subtle-pale-green-background-color", "has-subtle-pale-pink-background-color", "has-subtle-light-gray-background-color");
                e.classList.add("mdui-table", "mdx-dny-table", "mdui-table-hoverable");
                let wrapper = document.createElement('div');
                wrapper.classList.add('mdui-table-fluid');
                e.parentNode.insertBefore(wrapper, e);
                wrapper.appendChild(e);
            }
        });
        mdui.$(".mdx-dny-table").mutation();
    }
}

function mdx_shortcode() {
    if (document.getElementsByClassName("mdx-github-cot").length > 0) {
        for (var i = 0; i < document.getElementsByClassName("mdx-github-cot").length; i++) {
            mdxGitHubInfo(i);
        }
    }
    if (document.getElementsByClassName("mdx-post-cot").length > 0) {
        for (var i = 0; i < document.getElementsByClassName("mdx-post-cot").length; i++) {
            mdxAjaxPost(i);
        }
    }
}
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function mdxGitHubInfo(i) {
    var apiurl = `${document.getElementsByClassName("mdx-github-cot")[i].dataset.mdxgithubg}repos/${document.getElementsByClassName("mdx-github-cot")[i].dataset.mdxgithuba}/${document.getElementsByClassName("mdx-github-cot")[i].dataset.mdxgithubp}`;
    betterFetch(apiurl).then((data) => {
        let githubHomepage = "";
        if (data.homepage !== "" && data.homepage !== null) {
            githubHomepage = ' <a href="' + data.homepage + '" ref="nofollow" target="_blank">' + data.homepage + "</a>";
        }
        if (data.description !== null) {
            githubHomepage = '<br>' + data.description + githubHomepage;
        }
        let dataStars = data.stargazers_count;
        if (dataStars >= 1000) {
            dataStars = Math.round((dataStars / 1000) * Math.pow(10, 1)) / Math.pow(10, 1) + 'k';
        }
        const targetEle = document.getElementsByClassName("mdx-github-cot")[i];
        targetEle.innerHTML = `<div class="mdx-github-main"><a href="https://github.com/" ref="nofollow" target="_blank" class="gh-link" title="GitHub"><svg class="icon mdx-github-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><defs><style/></defs><path d="M950.93 512q0 143.43-83.75 257.97T650.9 928.55q-15.43 2.85-22.6-4.02t-7.17-17.12V786.87q0-55.44-29.7-81.11 32.55-3.44 58.6-10.32t53.68-22.3T750 635.1t30.28-59.98 11.7-86.01q0-69.12-45.13-117.7 21.14-52-4.53-116.58-16.02-5.12-46.3 6.29t-52.6 25.16l-21.72 13.68Q568.54 285.1 512 285.1t-109.71 14.85q-9.15-6.3-24.29-15.43t-47.69-22.02-49.15-7.68q-25.16 64.58-4.02 116.59Q232 419.99 232 489.1q0 48.56 11.7 85.72t30 59.98 46 38.25 53.68 22.3 58.6 10.32q-22.83 20.56-28.02 58.88-12 5.7-25.75 8.56t-32.55 2.85-37.45-12.29T276.48 728q-10.83-18.28-27.72-29.7t-28.3-13.67l-11.42-1.69q-12 0-16.6 2.56t-2.85 6.59 5.12 7.97 7.46 6.88l4.02 2.85q12.58 5.7 24.87 21.72t18 29.11l5.7 13.17q7.46 21.72 25.16 35.1T318.17 826t39.72 4.03 31.74-1.98l13.17-2.27q0 21.73.29 50.84t.3 30.86q0 10.32-7.47 17.12t-22.82 4.02Q240.57 884.6 156.82 770.05T73.07 512.07q0-119.44 58.88-220.3t159.74-159.75T512 73.14t220.3 58.88 159.75 159.75 58.88 220.3z" fill="#fff"/></svg> <span>GitHub</span></a><br><a href="https://github.com/${targetEle.dataset.mdxgithuba}/${targetEle.dataset.mdxgithubp}" ref="nofollow" target="_blank" class="repo-link"><span>${targetEle.dataset.mdxgithuba}/</span>${targetEle.dataset.mdxgithubp}</a>${githubHomepage}<br><br>★ ${dataStars}<a href="https://github.com/${targetEle.dataset.mdxgithuba}/${targetEle.dataset.mdxgithubp}" ref="nofollow" target="_blank" class="repo-link mdx-github-arrow"><i class="mdui-icon material-icons" title="${mdx_github_i18n_1}">&#xe5c8;</i></a></div>`;
    }).catch((function (x) {
        return function () {
            document.getElementsByClassName("mdx-github-cot")[x].getElementsByClassName("mdx-github-wait-out")[0].innerHTML = `${mdx_github_i18n_2} <a rel="nofollow" target="_blank" href="https://github.com/${document.getElementsByClassName("mdx-github-cot")[x].dataset.mdxgithuba}/${document.getElementsByClassName("mdx-github-cot")[x].dataset.mdxgithubp}">https://github.com/${document.getElementsByClassName("mdx-github-cot")[x].dataset.mdxgithuba}/${document.getElementsByClassName("mdx-github-cot")[x].dataset.mdxgithubp}</a>`;
        }
    })(i));
}

function mdxAjaxPost(i) {
    betterFetch(document.getElementsByClassName("mdx-post-cot")[i].dataset.mdxposturl).then((data) => {
        var htmlParser = new DOMParser();
        var htmlParsed = htmlParser.parseFromString(data, "text/html");
        var title = htmlParsed.querySelector("meta[property=\"og:title\"]")?.getAttribute("content") || htmlParsed.querySelector("meta[itemprop=\"name\"]")?.getAttribute("content");
        var url = htmlParsed.querySelector("meta[property=\"og:url\"]")?.getAttribute("content") || document.getElementsByClassName("mdx-post-cot")[i].dataset.mdxposturl;
        var shareCard = htmlParsed.getElementsByClassName("mdx-si-sum");
        var desc = "";
        if (shareCard[0]) {
            desc = shareCard[0].innerText;
        } else {
            desc = htmlParsed.querySelector("meta[property=\"og:description\"]")?.getAttribute("content") || htmlParsed.querySelector("meta[itemprop=\"description\"]")?.getAttribute("content");
        }
        if (desc === '') {
            desc = mdx_post_i18n_1;
        }
        var imgDOM = htmlParsed.querySelector("meta[property=\"og:image\"]") || htmlParsed.querySelector("meta[itemprop=\"image\"]");
        var img = "";
        if (imgDOM && imgDOM.getAttribute("content")) {
            img = imgDOM.getAttribute("content");
        }
        var imgDiv = "";
        if (!document.getElementsByClassName("mdx-post-cot")[i]) {
            if (url.substr(url.length - 1) === "/") {
                url = url.substr(0, url.length - 1);
            } else {
                url += "/";
            }
        }
        if (img !== "") {
            imgDiv = `<div class="mdx-post-card-img" style="background-image:url(${img});"></div>`
            document.getElementsByClassName("mdx-post-cot")[i].style.border = "0 solid #dadada";
        }
        document.getElementsByClassName("mdx-post-cot")[i].innerHTML = `<div class="mdx-post-main"><a href="${url}" ref="nofollow" class="post-link">${title}</a><br>${desc}<br><br><a href="${url}" ref="nofollow" class="arrow-link mdx-github-arrow"><i class="mdui-icon material-icons" title="${mdx_post_i18n_2}">&#xe5c8;</i></a></div>${imgDiv}`;
    }).catch((function (x) {
        return function () {
            document.getElementsByClassName("mdx-post-cot")[x].getElementsByClassName("mdx-github-wait-out")[0].innerHTML = `${mdx_post_i18n_3} <a rel="nofollow" href="${document.getElementsByClassName("mdx-post-cot")[x].dataset.mdxposturl}">${document.getElementsByClassName("mdx-post-cot")[x].dataset.mdxposturl}</a>`;
        }
    })(i))
}

//Scroll To the Top
document.getElementsByClassName("scrollToTop")[0].addEventListener("click", function () {
    HTMLScrollTo.to(0, 500);
}, false);

//Night Styles
var nsButton = document.getElementById("tgns");
if (nsButton) {
    document.getElementById("tgns").addEventListener("click", function () {
        if (!document.getElementsByTagName("body")[0].classList.contains("mdui-theme-layout-dark")) {
            sessionStorage.setItem('ns_night-styles', 'true');
            if (colorEnabled) {
                metaColor.setAttribute('content', "#212121");
            }
        } else {
            sessionStorage.setItem('ns_night-styles', 'false');
            if (colorEnabled) {
                metaColor.setAttribute('content', nowColor);
            }
        }
        document.getElementsByTagName("body")[0].classList.toggle("mdui-theme-layout-dark");
    }, false);
}

var lazyloadImg = document.querySelectorAll("article > *:not(figure) figure:not(.wp-block-image) img, article > figure:not(.wp-block-image) > img, article > figure.wp-block-gallery > ul > li > figure > a > figure > img");
if (lazyloadImg.length) {
    for (let el of lazyloadImg) {
        el.addEventListener('lazyloaded', function (e) {
            setTimeout(() => {
                var prevDom;
                if (e.target.previousSibling) {
                    prevDom = e.target.previousSibling;
                } else {
                    prevDom = e.target.parentNode.previousSibling;
                    e.target.parentNode.classList.add("mdx-img-loaded-no-anim");
                }
                prevDom.previousSibling.remove();
                prevDom.remove();
                e.target.classList.add("mdx-img-loaded-no-anim");
            }, 300);
        })
    }
};
var lazyloadImg2 = document.querySelectorAll("article figure.wp-block-image > figure.mdx-lazyload-container img, article figure.wp-block-image > a > figure.mdx-lazyload-container img");
if (lazyloadImg2.length) {
    for (let el of lazyloadImg2) {
        el.addEventListener('lazyloaded', function (e) {
            var prevDom;
            if (e.target.previousSibling) {
                prevDom = e.target.previousSibling;
            } else {
                prevDom = e.target.parentNode.previousSibling;
                e.target.parentNode.classList.add("mdx-img-loaded-no-anim");
            }
            prevDom.previousSibling.remove();
            prevDom.remove();
            e.target.classList.add("mdx-img-loaded-no-anim");
        })
    }
};
var lazyloadImg3 = document.querySelectorAll("article figure.wp-block-image > img, article figure.wp-block-image > a > img");
if (lazyloadImg3.length) {
    for (let el of lazyloadImg3) {
        el.addEventListener('lazyloaded', function (e) {
            if (!e.target.previousSibling) {
                e.target.parentNode.classList.add("mdx-img-loaded-no-anim");
            }
            e.target.classList.add("mdx-img-loaded-no-anim");
        })
    }
};

const findFilter = (el) => {
    if (el.classList.contains('wp-block-image')) {
        for (const cn of el.classList) {
            if (cn.startsWith('wp-duotone-')) {
                return cn;
            }
        }
        return false;
    }
    return false;
}

const getImgAlt = (el) => {
    const alt = el.getAttribute('alt');
    if (alt && alt !== '' && alt !== el.dataset.src) {
        return el.getAttribute('alt');
    } else if (el.closest('figure').parentNode.getElementsByTagName('figcaption').length > 0) {
        return el.closest('figure').parentNode.getElementsByTagName('figcaption')[0].innerText;
    }
    return '';
}

window.addEventListener('DOMContentLoaded', () => {
    if (mdx_comment_ajax && ele('#comments-navi>a.prev').getAttribute('href')) {
        ele('#comments-navi').innerHTML = `<button class="mdx-more-comments mdui-btn mdui-btn-icon mdui-color-theme-accent mdui-ripple" mdui-tooltip="{content: '${morecomment}'}" data-comment-url="${ele('#comments-navi>a.prev').getAttribute('href')}"><i class="mdui-icon material-icons">keyboard_arrow_down</i></button>`;
        mdui.$('ul.mdui-list.ajax-comments').mutation();
    }

    if (document.querySelectorAll('#comments > ul').length == 0) {
        ele('.ArtMain0 #respond', (e) => { e.style.borderRadius = '0 0 8px 8px' });
        ele('.ArtMain0 .mdx-comment-login-needed', (e) => { e.style.borderRadius = '0 0 8px 8px' });
    }

    if (ifOffline) {
        ele('#respond').innerHTML = tipMutiOffRes;
    }

    // Wrap plain table
    ele('article > table:not([class]):not([id])', (e) => {
        e.classList.add('mdui-table', 'mdx-dny-table', 'mdui-table-hoverable');
        const wrapper = document.createElement('div');
        wrapper.classList.add('mdui-table-fluid');
        e.parentNode.insertBefore(wrapper, e);
        wrapper.appendChild(e);
    })

    ele('article a > figure > img.lazyload, article > figure > img.lazyload, article a > figure > img.lazyloaded, article > figure > img.lazyloaded, article a > figure > img.lazyloading, article > figure > img.lazyloading', (e) => {
        if (e.classList.contains("aligncenter")) {
            e.parentNode.classList.add("aligncenter");
        } else if (e.classList.contains("alignright")) {
            e.parentNode.classList.add("alignright");
            let insertDOM = document.createElement("div");
            insertDOM.classList.add("mdx-clear-float");
            e.parentNode.parentNode.insertBefore(insertDOM, e.parentNode.nextSibling);
        } else if (e.classList.contains("alignleft")) {
            e.parentNode.classList.add("alignleft");
        }
    });

    //ImgBox
    if (mdx_imgBox == 1) {
        ele('article a > img', (e) => {
            var imgUrlEach = e.getAttribute('src');
            if (imgUrlEach == 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' || imgUrlEach == 'data:image/gif;base64,R0lGODlhAgABAIAAALGxsQAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==') {
                imgUrlEach = e.getAttribute('data-src').split("?")[0];
            }
            var imgHrefa = e.parentNode.getAttribute('href').replace(/(-scaled)*\.[^.]+$/, '-');
            if (imgUrlEach.indexOf(imgHrefa) != -1 || imgUrlEach == e.parentNode.getAttribute('href') || imgUrlEach == e.parentNode.getAttribute('href') + "-towebp") {
                e.classList.add("mdx-img-in-post");
                let wrapper = e.parentNode;
                for (let el of wrapper.childNodes) {
                    wrapper.parentNode.insertBefore(el, wrapper);
                }
                wrapper.parentNode.removeChild(wrapper);
            } else {
                e.parentNode.classList.add('mdx-img-in-post-with-link');
            }
        });
        ele('article a > figure > img.lazyload, article a > figure > img.lazyloaded, article a > figure > img.lazyloading', (e) => {
            var imgUrlEach = e.getAttribute('src');
            if (imgUrlEach == 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' || imgUrlEach == 'data:image/gif;base64,R0lGODlhAgABAIAAALGxsQAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==') {
                imgUrlEach = e.getAttribute('data-src').split("?")[0];
            }
            var imgHrefa = e.parentNode.parentNode.getAttribute('href').replace(/(-scaled)*\.[^.]+$/, '-');
            if (imgUrlEach.indexOf(imgHrefa) != -1 || imgUrlEach == e.parentNode.parentNode.getAttribute('href') || imgUrlEach == e.parentNode.parentNode.getAttribute('href') + '-towebp') {
                e.classList.add('mdx-img-in-post');
                let wrapper = e.parentNode.parentNode;
                for (let el of wrapper.childNodes) {
                    wrapper.parentNode.insertBefore(el, wrapper);
                }
                wrapper.parentNode.removeChild(wrapper);
            } else {
                let wrapper = document.createElement('a');
                wrapper.classList.add('mdx-img-in-post-with-link');
                wrapper.setAttribute('href', e.parentNode.parentNode.getAttribute('href'));
                e.parentNode.appendChild(wrapper);
                wrapper.appendChild(e);
                let raw_wrapper = e.parentNode.parentNode.parentNode;
                for (let el of raw_wrapper.childNodes) {
                    raw_wrapper.parentNode.insertBefore(el, raw_wrapper);
                }
                raw_wrapper.parentNode.removeChild(raw_wrapper);
            }
        });
        ele('img.mdx-img-in-post', (el) => {
            el.addEventListener('click', (e) => {
                var toTopDes = e.target.getBoundingClientRect().top, toLeftDes = e.target.getBoundingClientRect().left;
                var imgUrl = e.target.getAttribute('src');
                if (imgUrl == 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' || imgUrl == 'data:image/gif;base64,R0lGODlhAgABAIAAALGxsQAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==') {
                    imgUrl = e.target.getAttribute('data-src');
                }
                imgRaw = e.target;
                imgRaw.style.opacity = 0;
                const eleFilter = e.target.closest('figure.wp-block-image');
                let filter = '';
                if (eleFilter) {
                    const filterName = findFilter(eleFilter);
                    if (filterName) {
                        filter = filterName;
                    }
                }
                ele('div.mdui-drawer', (e) => {
                    e.insertAdjacentHTML('beforebegin', `<div id="img-box" class="mdui-valign${mdx_img_box_opacity ? ' opacity-bg' : ''}"></div><div class="mdx-img-viewer${filter === '' ? '' : ` wp-block-image ${filter}`}"></div><div class="mdui-valign mdx-loading-img"><div class="mdui-center"><div class="mdui-spinner"></div></div></div>`);
                })
                mdui.updateSpinners();
                ele('.mdx-img-viewer', (elem) => {
                    elem.innerHTML += `<img src="${e.target.getAttribute("src")}" style="top:${toTopDes}px;left:${toLeftDes}px;width:${e.target.getBoundingClientRect().width}px;height:${e.target.getBoundingClientRect().height}px;" data-raww="${e.target.getBoundingClientRect().width}" data-rawh="${e.target.getBoundingClientRect().height}" data-post="${toTopDes}" data-posl="${toLeftDes}">${getImgAlt(e.target) !== '' ? `<div class="image-view-alt">${mdx_img_alt && getImgAlt(e.target).replace(/[<>&"]/g, (c) => {return {'<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;'}[c]})}</div>` : ''}`;
                })
                ele('#img-box').style.display = "flex";
                ele('#img-box').style.opacity = 1;
                getImageWidth(imgUrl, function (w, h, img) {
                    ele('.mdx-img-viewer').style.display = "block";
                    var imgWdh = w / h, windowWdh = winwidth / winheight;
                    if (imgWdh > windowWdh) {
                        if (img.naturalWidth >= winwidth) {
                            ele('.mdx-img-viewer img').style.transition = 'all .2s';
                            setTimeout(() => {
                                ele('.mdx-img-viewer img', (e) => {
                                    e.style.width = winwidth + 'px';
                                    e.style.height = winwidth / imgWdh + 'px';
                                    e.style.top = (winheight - (winwidth / imgWdh)) / 2 + 'px';
                                    e.style.left = '0';
                                });
                                if (mdx_img_alt) {
                                    ele('.mdx-img-viewer .image-view-alt', (e) => {
                                        e.style.paddingLeft = e.style.paddingRight = '15px';
                                    });
                                    setTimeout(() => {
                                        ele('.mdx-img-viewer .image-view-alt', (e) => {
                                            e.style.opacity = '1';
                                        })
                                    }, 200);
                                }
                            }, 0);
                        } else {
                            ele('.mdx-img-viewer img').style.transition = 'all .2s';
                            setTimeout(() => {
                                ele('.mdx-img-viewer img', (e) => {
                                    e.style.width = img.naturalWidth + 'px';
                                    e.style.height = img.naturalHeight + 'px';
                                    e.style.top = (winheight - (img.naturalHeight)) / 2 + 'px';
                                    e.style.left = (winwidth - (img.naturalWidth)) / 2 + 'px';
                                });
                                if (mdx_img_alt) {
                                    ele('.mdx-img-viewer .image-view-alt', (e) => {
                                        e.style.paddingLeft = e.style.paddingRight = (winwidth - (img.naturalWidth)) / 2 + 15 + 'px';
                                    });
                                    setTimeout(() => {
                                        ele('.mdx-img-viewer .image-view-alt', (e) => {
                                            e.style.opacity = '1';
                                        })
                                    }, 200);
                                }
                            }, 0);
                        }
                    } else {
                        if (img.naturalHeight >= winheight) {
                            ele('.mdx-img-viewer img').style.transition = 'all .2s';
                            setTimeout(() => {
                                ele('.mdx-img-viewer img', (e) => {
                                    e.style.width = winheight * imgWdh + 'px';
                                    e.style.height = winheight + 'px';
                                    e.style.top = '0';
                                    e.style.left = (winwidth - (winheight * imgWdh)) / 2 + 'px';
                                });
                                if (mdx_img_alt) {
                                    ele('.mdx-img-viewer .image-view-alt', (e) => {
                                        e.style.paddingLeft = e.style.paddingRight = (winwidth - (winheight * imgWdh)) / 2 + 15 + 'px';
                                    });
                                    setTimeout(() => {
                                        ele('.mdx-img-viewer .image-view-alt', (e) => {
                                            e.style.opacity = '1';
                                        })
                                    }, 200);
                                }
                            }, 0);
                        } else {
                            ele('.mdx-img-viewer img').style.transition = 'all .2s';
                            setTimeout(() => {
                                ele('.mdx-img-viewer img', (e) => {
                                    e.style.width = img.naturalWidth + 'px';
                                    e.style.height = img.naturalHeight + 'px';
                                    e.style.top = (winheight - (img.naturalHeight)) / 2 + 'px';
                                    e.style.left = (winwidth - (img.naturalWidth)) / 2 + 'px';
                                });
                                if (mdx_img_alt) {
                                    ele('.mdx-img-viewer .image-view-alt', (e) => {
                                        e.style.paddingLeft = e.style.paddingRight = (winwidth - (img.naturalWidth)) / 2 + 15 + 'px';
                                    });
                                    setTimeout(() => {
                                        ele('.mdx-img-viewer .image-view-alt', (e) => {
                                            e.style.opacity = '1';
                                        })
                                    }, 200);
                                }
                            }, 0);
                        }
                    }
                })
                function getImageWidth(url, callback) {
                    var img = new Image();
                    img.src = url;
                    if (img.complete) {
                        callback(img.width, img.height, img);
                        ele('div.mdx-loading-img', (e) => {
                            e.parentNode.removeChild(e);
                        });
                    } else {
                        ele('.mdx-img-viwer').style.display = "none";
                        img.onload = function () {
                            callback(img.width, img.height, img);
                            ele('div.mdx-loading-img', (e) => {
                                e.parentNode.removeChild(e);
                            });
                        }
                    }
                }
                if (colorEnabled) {
                    metaColor.setAttribute('content', "#212121");
                }
                ele('.mdx-img-viwer').addEventListener('load', () => {
                    ele('div.mdx-loading-img', (e) => {
                        e.parentNode.removeChild(e);
                    });
                })
            })
        })
        mdui.$('body').on('click', '.mdx-img-viewer', function () {
            ele('#img-box').style.opacity = '0';
            ele('#img-box').style.pointerEvents = 'none';
            if (mdx_img_alt) {
                ele('.mdx-img-viewer .image-view-alt', (e) => {
                    e.style.opacity = '0';
                })
            }
            ele('.mdx-img-viewer img', (e) => {
                e.style.width = ele('.mdx-img-viewer img').getAttribute("data-raww") + "px";
                e.style.height = ele('.mdx-img-viewer img').getAttribute("data-rawh") + "px";
                e.style.top = ele('.mdx-img-viewer img').getAttribute("data-post") + "px";
                e.style.left = ele('.mdx-img-viewer img').getAttribute("data-posl") + "px";

            })
            if (colorEnabled) {
                if (sessionStorage.getItem('ns_night-styles') != "true") {
                    metaColor.setAttribute('content', nowColor);
                } else {
                    metaColor.setAttribute('content', "#212121");
                }
            }
            window.setTimeout(afterCloseImgBox, 200);
        })
    } else {
        ele('article a > img', (e) => {
            e.parentNode.classList.add("mdx-img-in-post-with-link");
        });
        ele('article a > figure > img.lazyload, article a > figure > img.lazyloaded, article a > figure > img.lazyloading', (e) => {
            e.parentNode.parentNode.classList.add("mdx-img-in-post-with-link");
        });
    }
    ele('article a > img:not(.lazyload):not(.lazyloaded):not(.lazyloading)', (e) => {
        e.parentNode.classList.add('mdx-nonlazy-link');
    })
    ele('article img.alignright:not(.lazyload):not(.lazyloaded):not(.lazyloading)', (e) => {
        let insertDOM = document.createElement("div");
        insertDOM.classList.add("mdx-clear-float");
        e.parentNode.insertBefore(insertDOM, e.nextSibling);
    })

    //评论优化
    ele('.disfir', (e) => { e.style.display = "none" });
    ele('.commurl', (e) => { e.style.display = "none" });
    ele("div#comments ul li p", (e) => { e.classList.add('mdui-typo') });
    ele('.comment-reply-link', (e) => {
        e.classList.add('mdui-btn');
        e.style.opacity = 0;
    })
    ele('.comment-reply-login', (e) => {
        e.classList.add('mdui-btn');
        e.style.opacity = 0;
    })
    ele('p.form-submit', (e) => {
        e.innerHTML = `<a mdui-tooltip="{content: ${moreinput}, position: 'top'}" class="mdui-btn mdui-btn-icon mdui-ripple moreInComm"><i class="mdui-icon material-icons">&#xe313;</i></a>` + e.innerHTML;
    })
    var ifOpenComm = 0;
    ele('a.moreInComm', (e) => {
        e.addEventListener('click', () => {
            if (ifOpenComm == 0) {
                fade(ele('.commurl', null, 'array'), 'in', 200);
                ele('a.moreInComm', (el) => {
                    el.style.transform = 'rotate(180deg)';
                })
                ifOpenComm = 1;
            } else {
                ele('.commurl', (el) => { el.style.display = "none" });
                ele('a.moreInComm', (el) => {
                    el.style.transform = 'rotate(0deg)';
                })
                ifOpenComm = 0;
            }
        }, false);
    })

    //密码优化
    var inputId = ele('form.post-password-form p > label > input').getAttribute('id');
    const passwordForm = document.querySelectorAll('form.post-password-form p');
    if (passwordForm.length > 0) {
        passwordForm[1].innerHTML = `<div class="mdui-textfield mdui-textfield-floating-label inpass"><label class="mdui-textfield-label">${mdx_i18n_password}</label><input class="mdui-textfield-input" type="password" name="post_password" id="${inputId}"></div>`;
    }

    if (document.getElementsByTagName('body')[0].classList.contains('mdx-reduce-motion')) {
        var mrm = window.matchMedia('(prefers-reduced-motion: reduce)');
        mrm.addEventListener('change', handleMotionChange);
        handleMotionChange(mrm);
    }
})

function handleMotionChange(mrm) {
    if (sessionStorage.getItem('mrm_enable') === 'user') {
        document.getElementsByTagName('body')[0].classList.remove('mdx-reduce-motion');
        return;
    }
    if (mrm.matches && document.getElementsByTagName('body')[0].classList.contains('mdx-reduce-motion')) {
        if (!sessionStorage.getItem('mrm_enable')) {
            mdui.snackbar({
                message: reduce_motion_i18n_1,
                buttonText: reduce_motion_i18n_2,
                timeout: 7000,
                onButtonClick: function () {
                    sessionStorage.setItem('mrm_enable', 'user');
                    document.getElementsByTagName('body')[0].classList.remove('mdx-reduce-motion');
                },
                position: 'top',
            });
            sessionStorage.setItem('mrm_enable', 'sys');
            document.getElementsByTagName('body')[0].classList.add('mdx-reduce-motion');
        }
    } else {
        if (sessionStorage.getItem('mrm_enable')) {
            mdui.snackbar({
                message: reduce_motion_i18n_3,
                timeout: 5000,
                position: 'top',
            });
        }
        sessionStorage.removeItem('mrm_enable');
    }
}

function afterCloseImgBox() {
    imgRaw.style.opacity = 1;
    ele('div#img-box', (e) => {
        e.parentNode.removeChild(e);
    });
    ele('.mdx-loading-img', (e) => {
        e.parentNode.removeChild(e);
    });
    ele('.mdx-img-viewer', (e) => {
        e.parentNode.removeChild(e);
    });
}

ele('#comment').addEventListener('focus', () => {
    fade(ele('.disfir', null, 'array'), 'in', 200);
    ele('a.moreInComm', (e) => {
        e.style.opacity = 1;
        e.style.pointerEvents = 'auto';
    });
})

var now_url = '';

ele('#oth-div').addEventListener('click', () => {
    var howFar2 = document.documentElement.scrollTop || document.body.scrollTop;
    if (document.getElementsByClassName('ArtMain').length > 0) {
        var postHight2 = ele('.ArtMain').getBoundingClientRect().height + ele('.ArtMain').getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientHeight;
    } else {
        var postHight2 = ele('article.mdui-typo').getBoundingClientRect().height + ele('article.mdui-typo').getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientHeight;
    }
    var nowPro2 = (howFar2 / postHight2).toFixed(3);
    if (nowPro2 > 1) {
        nowPro2 = 1;
    } else {
        let min = -Infinity;
        var mini = 0;
        var list = document.querySelectorAll(".PostMain article.post[id^='post-'] > *");
        for (let i in list) {
            let delta = list[i].offsetTop - howFar2;
            if (delta <= 0) {
                if (delta > min) {
                    min = delta;
                    mini = i;
                }
            }
        }
        if (min > -Infinity) {
            var elem = list[mini];
            var percent = ((0 - min) / elem.offsetHeight).toFixed(3);
            nowPro2 = 'v2:' + mini + ':' + percent + ':' + nowPro2;
        } else {
            nowPro2 = 0;
        }
    }
    let now_url_p = window.location.href.split('?_pro=')[0].split('&_pro=')[0];
    let now_url = now_url_p.indexOf('?') === -1 ? now_url_p + '?_pro=' + nowPro2 : now_url_p + '&_pro=' + nowPro2;
    ele('#qrcode').innerHTML = '';
    new QRCode(document.getElementById('qrcode'), {
        text: now_url,
        width: 150,
        height: 150,
        correctLevel: QRCode.CorrectLevel.M
    });
});

function share_wechat(e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger") {
        mdui.dialog({
            content: '<i class="mdui-icon material-icons">&#xe5d3;</i><br><br>' + mdx_si_i18n_4,
            buttons: [{
                text: 'OK',
            }],
            history: false,
            cssClass: 'mdx-share-in-wechat-dialog',
        });
    } else {
        mdui.dialog({
            content: `<div id="mdx-share-wechat-qrcode"></div><div class="share-wechat-tip"><i class="mdui-icon material-icons">&#xe80d;</i> ${mdx_si_i18n_3}</div>`,
            buttons: [{
                text: mdx_si_i18n_2,
            }],
            history: false,
            cssClass: 'mdx-share-wechat-dialog',
            onOpen: function () {
                now_url = window.location.href.replace(window.location.search, '');
                new QRCode(document.getElementById('mdx-share-wechat-qrcode'), {
                    text: now_url,
                    width: 250,
                    height: 250,
                    correctLevel: QRCode.CorrectLevel.M
                });
            }
        });
    }
}

//Search
document.getElementsByClassName("seai")[0].addEventListener("click", function () {
    let searchBarDOM = document.getElementById("SearchBar");
    searchBarDOM.style.display = "block";
    fade(ele('.OutOfsearchBox', null, 'array'), 'in', 300);
    fade(ele('.fullScreen', null, 'array'), 'in', 300);
    ele("#SearchBar > *", (e) => new Opacity(e, 1, 200));
    setTimeout(() => {
        document.getElementsByClassName("outOfSearch")[0].style.width = '75%';
        searchBarDOM.classList.add("mdui-color-theme");
    }, 0);
    document.getElementsByClassName("seainput")[0].focus();
    document.getElementsByTagName("body")[0].classList.toggle('mdx-search-lock');
    if (ifOffline) {
        let searchBoxDOM = document.getElementsByClassName('OutOfsearchBox')[0];
        searchBoxDOM.innerHTML = '<div class="searchBoxFill"></div><div class="underRes">' + tipMutiOff + '</div>';
        searchBoxDOM.style.pointerEvents = 'auto';
        document.getElementsByClassName("seainput")[0].setAttribute('disabled', 'disabled');
    }
}, false);
for (let ele of document.getElementsByClassName("sea-close")) {
    ele.addEventListener("click", closeSearch, false);
}
function closeSearch() {
    document.getElementsByClassName("seainput")[0].blur();
    ele("#SearchBar > *", (e) => new Opacity(e, 0, 200));
    fade(ele('.fullScreen', null, 'array'), 'out', 300);
    fade(ele('.OutOfsearchBox', null, 'array'), 'out', 300);
    document.getElementsByClassName("outOfSearch")[0].style.width = '30%';
    window.setTimeout(hideBar, 300);
    document.getElementById("SearchBar").classList.remove("mdui-color-theme");
    setTimeout(() => {
        let bodyDOM = document.getElementsByTagName("body")[0];
        if (bodyDOM.classList.contains('mdx-search-lock')) {
            bodyDOM.classList.toggle('mdx-search-lock');
        }
        document.getElementsByClassName("outOfSearch")[0].removeAttribute("style");
    }, 300);
};

function hideBar() {
    document.getElementById("SearchBar").style.display = "none";
}

//Share img
window.addEventListener('DOMContentLoaded', () => {
    scrollDiff();
    new QRCode(document.getElementById("mdx-si-qr"), {
        text: window.location.href.split("?_pro=")[0].split("&_pro=")[0],
        width: 70,
        height: 70,
        correctLevel: QRCode.CorrectLevel.L,
        colorLight: '#f5f5f5'
    });

    var mdx_post_time = ele('.mdx-si-time').innerHTML.split("-");
    ele('.mdx-si-time').innerHTML = `${mdx_post_time[2]}<br><span class="mdx-si-time-2">${mdx_post_time[0]}/${mdx_post_time[1]}</span>`;
})
function convertCanvasToImage(canvas) {
    var image = new Image();
    var canvasData = canvas.toDataURL("image/png");
    sessionStorage.setItem('si_' + urlHash, canvasData);
    image.src = canvasData;
    document.getElementById('mdx-share-img-loaded-container').appendChild(image);
    ele('#mdx-share-img').style.display = 'none';
    ele('div.mdx-share-img-loading', (e) => {
        e.parentNode.removeChild(e);
    });
    setTimeout(() => {
        window.share_dialog.handleUpdate();
        ele(".mdx-share-img-dialog .mdui-dialog-actions", (e) => {
            let spanDom = document.createElement('span');
            spanDom.classList.add('mdx-save-info');
            spanDom.innerHTML = `<i class="mdui-icon material-icons">&#xe80d;</i> ${mdx_si_i18n}`
            e.insertBefore(spanDom, e.firstChild);
        });
    }, 5);
}

function mdx_show_img(e) {
    e.preventDefault();
    window.share_dialog = mdui.dialog({
        content: '<div class="mdx-share-img-loaded" id="mdx-share-img-loaded-container"></div><div class="mdui-valign mdx-share-img-loading"><div class="mdui-center"><div class="mdui-spinner"></div></div></div>',
        buttons: [
            {
                text: mdx_si_i18n_2,
            }
        ],
        history: false,
        cssClass: 'mdx-share-img-dialog'
    });
    mdui.updateSpinners();
    ele('#mdx-share-img').style.display = 'block';

    if (!sessionStorage.getItem('si_' + urlHash)) {
        import(/* webpackPrefetch: true, webpackChunkName: 'html2canvas' */ 'html2canvas').then((module) => {
            module.default(document.getElementById('mdx-share-img'), { useCORS: true }).then(convertCanvasToImage);
        })
    } else {
        var image = new Image();
        image.src = sessionStorage.getItem('si_' + urlHash);
        document.getElementById('mdx-share-img-loaded-container').appendChild(image);
        ele('#mdx-share-img').style.display = 'none';
        ele('div.mdx-share-img-loading', (e) => {
            e.parentNode.removeChild(e);
        });
        setTimeout(() => {
            window.share_dialog.handleUpdate();
            ele('.mdx-share-img-dialog .mdui-dialog-actions', (e) => {
                let spanDom = document.createElement('span');
                spanDom.classList.add('mdx-save-info');
                spanDom.innerHTML = `<i class="mdui-icon material-icons">&#xe80d;</i> ${mdx_si_i18n}`
                e.insertBefore(spanDom, e.firstChild);
            });
        }, 5);
    }
}

// 评论分页
if (!mdx_comment_ajax) {
    ele('#comments').addEventListener('click', commentNaviLink, false);
} else {
    ele('#comments').addEventListener('click', commentNavi, false);
}
function commentNaviLink(e) {
    if (e.target.tagName === 'A' && e.target.closest('#comments-navi') !== null) {
        e.preventDefault();
        ele('#comments-navi', (e) => {
            e.parentNode.removeChild(e);
        });
        ele('ul.mdui-list.ajax-comments', (e) => {
            e.parentNode.removeChild(e);
        });
        ele('.mdx-comments-loading').style.display = 'block';
        HTMLScrollTo.to(ele('#reply-title').getBoundingClientRect().top + window.pageYOffset - 65, 500);
        betterFetch(e.target.getAttribute('href')).then((out) => {
            let htmlParser = new DOMParser();
            let htmlParsed = htmlParser.parseFromString(out, "text/html");
            let result = htmlParsed.querySelector('ul.mdui-list.ajax-comments');
            let nextlink = htmlParsed.getElementById('comments-navi');
            ele('#comments').insertBefore(result, ele('#comments').firstChild);
            ele('ul.mdui-list.ajax-comments').insertAdjacentElement('afterend', nextlink);
            ele("div#comments ul li p", (e) => {
                e.classList.add('mdui-typo');
            });
            ele('.comment-reply-login, .comment-reply-link', (e) => {
                e.classList.add("mdui-btn");
                e.style.opacity = 0;
            });
            window.addComment.init();
            ele('.mdx-comments-loading').style.display = 'none';
        })
    }
}
function commentNavi(e) {
    if ((e.target.tagName === 'BUTTON' || e.target.tagName === 'I') && e.target.closest('#comments-navi') !== null) {
        e.preventDefault();
        ele('#comments-navi', (e) => {
            e.parentNode.removeChild(e);
        });
        ele('.mdx-comments-loading').style.display = 'block';
        let elem = e.target;
        if (elem.tagName === "I") {
            elem = elem.parentNode;
        }
        ele('.mdui-tooltip-open', (e) => {
            e.parentNode.removeChild(e);
        });
        betterFetch(elem.getAttribute('data-comment-url')).then((out) => {
            let htmlParser = new DOMParser();
            let htmlParsed = htmlParser.parseFromString(out, "text/html");
            let result = '';
            let ajaxComments = htmlParsed.querySelector('ul.mdui-list.ajax-comments');
            if (ajaxComments) {
                result = ajaxComments.innerHTML;
            }
            let nextUrl = false;
            let prevA = htmlParsed.querySelector('#comments-navi>a.prev');
            if (prevA) {
                nextUrl = prevA.getAttribute('href');
            }
            let nextlink = '';
            if (nextUrl) {
                htmlParsed.getElementById('comments-navi').innerHTML = `<button class="mdx-more-comments mdui-btn mdui-btn-icon mdui-color-theme-accent mdui-ripple" mdui-tooltip="{content: '${morecomment}'}" data-comment-url="${htmlParsed.querySelector('#comments-navi>a.prev').getAttribute('href')}"><i class="mdui-icon material-icons">keyboard_arrow_down</i></button>`;
                nextlink = htmlParsed.getElementById('comments-navi');
            } else {
                htmlParsed.getElementById('comments-navi').innerHTML = `<button class="mdui-btn" disabled>${nomorecomment}</button>`;
                nextlink = htmlParsed.getElementById('comments-navi');
            }
            ele('ul.mdui-list.ajax-comments').insertAdjacentElement('afterend', nextlink);
            ele('ul.mdui-list.ajax-comments', (e) => {
                e.innerHTML += result;
            })
            ele("div#comments ul li p", (e) => {
                e.classList.add('mdui-typo');
            });
            ele('.comment-reply-login, .comment-reply-link', (e) => {
                e.classList.add("mdui-btn");
                e.style.opacity = 0;
            });
            window.addComment.init();
            mdui.$('ul.mdui-list.ajax-comments').mutation();
            ele('.mdx-comments-loading').style.display = 'none';
        });
    }
}

//tap tp top
document.getElementsByClassName("mdui-typo-headline")[0].addEventListener("click", function () {
    if (mdx_tapToTop == 1) {
        HTMLScrollTo.to(0, 500);
    }
})

//init menu
window.addEventListener('DOMContentLoaded', () => {
    var mdxHaveChild = 0;
    var mdxIsC = 0;
    for (let ele of document.querySelectorAll('#mdx_menu > li')) {
        if (ele.classList.contains('menu-item-has-children')) {
            ele.classList.add('mdui-collapse-item');
            ele.classList.remove('mdui-list-item');
            ele.innerHTML = `<div class="mdui-collapse-item-header mdui-list-item mdui-ripple"><div class="mdui-list-item-content"><a class="mdx-sub-menu-a" href="${ele.getElementsByTagName("a")[0].getAttribute('href')}">${ele.getElementsByTagName("a")[0].innerHTML}</a></div><i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i></div><ul class="mdui-collapse-item-body mdui-list mdui-list-dense">${ele.getElementsByTagName("ul")[0].innerHTML}</ul>`;
            mdxHaveChild = 1;
            for (let ul of ele.getElementsByTagName("ul")) {
                for (let li of ul.getElementsByTagName("li")) {
                    if (li.classList.contains('current-menu-item')) {
                        mdxIsC = 1;
                    }
                }
            }
            if (mdxIsC) {
                ele.classList.remove('current-menu-item', 'current_page_item');
                ele.classList.add('mdui-collapse-item-open');
            }
            mdxIsC = 0;
        }
        if (mdxHaveChild) {
            let menuDOM = document.getElementById('mdx_menu');
            menuDOM.classList.add('mdui-collapse');
            menuDOM.setAttribute('mdui-collapse', '');
        }
    }
    new mdui.Collapse('#mdx_menu');

    //cookie
    var ifDisplay = typeof displayCookie === 'undefined' ? true : displayCookie;
    var cookieEle = document.getElementById('mdx-cookie-notice');
    var flagName = typeof cookieFlagName === 'undefined' ? 'mdx_cookie' : cookieFlagName;
    if (ifDisplay && cookieEle && !localStorage.getItem(flagName)) {
        cookieEle.classList.add('mdx-cookie-notice-show');
        cookieEle.getElementsByTagName('button')[0].addEventListener('click', agreeCookie, false);
    }

    function agreeCookie() {
        localStorage.setItem(flagName, 'true');
        document.getElementById('mdx-cookie-notice').style.bottom = '-400px';
        setTimeout(() => {
            document.getElementById('mdx-cookie-notice').classList.remove('mdx-cookie-notice-show');
        }, 400);
    }

    var cfcc = document.getElementsByClassName('comment-form-cookies-consent');
    if (cfcc.length > 0) {
        const checkboxIcon = document.createElement('i');
        checkboxIcon.classList.add('mdui-checkbox-icon');
        ele('#wp-comment-cookies-consent').insertAdjacentElement('afterend', checkboxIcon);
        cfcc[0].innerHTML = '<label class="mdui-checkbox">' + cfcc[0].innerHTML + '</label>';
    }

    if (document.getElementsByClassName('mdx-s-img-li').length > 0) {
        document.querySelector('.mdx-s-img-li > a').addEventListener('click', mdx_show_img, false);
    }
    let wechatDom = document.getElementById('share-wechat');
    if (wechatDom) {
        wechatDom.addEventListener('click', share_wechat, false);
    }
})