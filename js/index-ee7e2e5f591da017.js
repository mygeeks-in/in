(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    75557: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return c(58012);
        },
      ]);
    },
    78352: function (a, b, c) {
      "use strict";
      c.d(b, {
        Z: function () {
          return j;
        },
      });
      var d = c(85893),
        e = c(9008),
        f = c.n(e),
        g = c(43135),
        h = c(67294),
        i = c(11163);
      function j(a) {
        var b,
          c,
          e,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t = a.title,
          u = a.contentType,
          v = a.pageDescription,
          w = a.relativeUrl,
          x = (a.breadCrumbsData, a.isCanonicalLinkPresent),
          y = a.addWebsiteSchema,
          z = void 0 !== y && y,
          A = a.canonicalLink,
          B = a.homePageArticlesData,
          C = void 0 === B ? void 0 : B,
          D = a.currPage,
          E = a.lastPage,
          F = a.materialIcon,
          G =
            (a.additionalRequest,
            a.collegesForExplorePage,
            a.organizationForExplorePage,
            a.collegeAboutData,
            a.organizationAboutData,
            a.homePageCanonical),
          H = a.tagCategoryPageCanonicalLink,
          I = a.collegeHomeSchemaData,
          J = a.collegeSchemaData,
          K = a.companyHomeSchemaData,
          L = a.companySchemaData,
          M = a.taxonomySchemaData,
          N = a.tagSchemaData,
          O = a.indexed,
          P = void 0 === O || O,
          Q = (a.isMobileView, (0, i.useRouter)()),
          R =
            null == Q
              ? void 0
              : null === (b = Q.asPath) || void 0 === b
                ? void 0
                : b.split("/");
        (R.shift(), R.pop());
        for (
          var S = "", T = 0;
          T < (null == R ? void 0 : R.length) && "page" !== R[T];
          T++
        )
          S += "".concat(R[T], "/");
        return (0, d.jsxs)(f(), {
          children: [
            (0, d.jsx)("title", { children: t }),
            (0, d.jsx)("meta", { charSet: "UTF-8" }),
            (0, d.jsx)("meta", {
              name: "keywords",
              content:
                "Organization, College, Companies, Institutions, Video, Data Structures, Algorithms, Python, Java, C, C++, JavaScript, Android Development, SQL, Data Science, Machine Learning, PHP, Web Development, System Design, Tutorial, Technical Blogs, Interview Experience, Interview Preparation, Programming, Competitive Programming, SDE Sheet, Job-a-thon, Coding Contests, GATE CSE, HTML, CSS, React, NodeJS, Placement, Aptitude, Quiz, Computer Science, Programming Examples, mygeeks Courses, Puzzles",
            }),
            (0, d.jsx)("meta", {
              property: "og:description",
              name: "description",
              content:
                "Your All-in-One Learning Portal. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions.",
            }),
            (0, d.jsx)("meta", {
              property: "og:url",
              content: "".concat(g.Jx.mg_SITE_URL).concat(w),
            }),
            (0, d.jsx)("link", {
              rel: "shortcut icon",
              href: "https://media.mygeeks.org/wp-content/cdn-uploads/mg_favicon.png",
              type: "image/x-icon",
            }),
            void 0 !== F &&
              F &&
              (0, d.jsx)("link", {
                href: "https://fonts.googleapis.com/icon?family=Material+Icons",
                rel: "stylesheet",
              }),
            z &&
              (0, d.jsxs)(h.Fragment, {
                children: [
                  (0, d.jsx)("meta", {
                    name: "theme-color",
                    content: "#308D46",
                  }),
                  P
                    ? (0, d.jsx)("meta", {
                        name: "robots",
                        content:
                          "index, follow, max-image-preview:large, max-snippet:-1",
                      })
                    : (0, d.jsx)("meta", {
                        name: "robots",
                        content: "noindex, nofollow",
                      }),
                  (0, d.jsx)("meta", {
                    name: "facebook-domain-verification",
                    content: "xo7t4ve2wn3ywfkjdvwbrk01pvdond",
                  }),
                  (0, d.jsx)("meta", {
                    name: "msapplication-TileImage",
                    content:
                      "https://www.mygeeks.org/wp-content/uploads/mg_200X200.png",
                  }),
                  (0, d.jsx)("meta", {
                    property: "og:locale",
                    content: "en_US",
                  }),
                  (0, d.jsx)("meta", {
                    property: "og:type",
                    content: "object",
                  }),
                  C
                    ? (0, d.jsx)("meta", {
                        property: "og:title",
                        content:
                          "mygeeks | Your All-in-One Learning Portal | Page ".concat(
                            D,
                          ),
                      })
                    : (0, d.jsx)("meta", {
                        property: "og:title",
                        content: "mygeeks",
                      }),
                  (0, d.jsx)("meta", {
                    property: "og:site_name",
                    content: "mygeeks",
                  }),
                ],
              }),
            !z &&
              (0, d.jsx)(h.Fragment, {
                children: P
                  ? (0, d.jsx)("meta", {
                      name: "robots",
                      content:
                        "index, follow, max-image-preview:large, max-snippet:-1",
                    })
                  : (0, d.jsx)("meta", {
                      name: "robots",
                      content: "noindex, nofollow",
                    }),
              }),
            (0, d.jsx)("meta", {
              name: "image",
              property: "og:image",
              content:
                "https://media.mygeeks.org/wp-content/cdn-uploads/mg_200x200-min.png",
            }),
            (0, d.jsx)("meta", {
              property: "og:image:type",
              content: "image/png",
            }),
            (0, d.jsx)("meta", { property: "og:image:width", content: "200" }),
            (0, d.jsx)("meta", { property: "og:image:height", content: "200" }),
            (0, d.jsx)("meta", { name: u, content: v }),
            (null == Q
              ? void 0
              : null === (c = Q.asPath) || void 0 === c
                ? void 0
                : c.startsWith("/colleges/")) &&
              !(null == Q
                ? void 0
                : null === (e = Q.query) || void 0 === e
                  ? void 0
                  : e.params) &&
              (0, d.jsx)("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: { __html: I },
              }),
            (null == Q
              ? void 0
              : null === (j = Q.asPath) || void 0 === j
                ? void 0
                : j.startsWith("/colleges/")) &&
              (null == Q
                ? void 0
                : null === (k = Q.query) || void 0 === k
                  ? void 0
                  : null === (l = k.params) || void 0 === l
                    ? void 0
                    : l.length) >= 1 &&
              (0, d.jsx)("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: { __html: J },
              }),
            (null == Q
              ? void 0
              : null === (m = Q.asPath) || void 0 === m
                ? void 0
                : m.startsWith("/companies/")) &&
              !(null == Q
                ? void 0
                : null === (n = Q.query) || void 0 === n
                  ? void 0
                  : n.params) &&
              (0, d.jsx)("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: { __html: K },
              }),
            (null == Q
              ? void 0
              : null === (o = Q.asPath) || void 0 === o
                ? void 0
                : o.startsWith("/companies/")) &&
              (null == Q
                ? void 0
                : null === (p = Q.query) || void 0 === p
                  ? void 0
                  : null === (q = p.params) || void 0 === q
                    ? void 0
                    : q.length) >= 1 &&
              (0, d.jsx)("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: { __html: L },
              }),
            M &&
              (0, d.jsx)("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: { __html: M },
              }),
            N &&
              (0, d.jsx)("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: { __html: N },
              }),
            z &&
              (0, d.jsx)("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    url: "".concat(g.Jx.mg_SITE_URL),
                    potentialAction: {
                      "@type": "SearchAction",
                      target: "".concat(
                        g.Jx.mg_SITE_URL,
                        "search/{search_term_string}/",
                      ),
                      "query-input": "required name=search_term_string",
                    },
                  }),
                },
              }),
            void 0 !== x &&
              x &&
              (0, d.jsx)("link", {
                rel: "canonical",
                href: "".concat(g.Jx.mg_SITE_URL).concat(void 0 === A ? "" : A),
              }),
            C &&
              (0, d.jsxs)(d.Fragment, {
                children: [
                  (0, d.jsx)("link", {
                    rel: "canonical",
                    href: "".concat(g.Jx.mg_SITE_URL, "page/").concat(D),
                  }),
                  D !== E
                    ? (0, d.jsx)("link", {
                        rel: "next",
                        href: ""
                          .concat(g.Jx.mg_SITE_URL, "page/")
                          .concat(D + 1, "/"),
                      })
                    : null,
                  1 !== D
                    ? (0, d.jsx)("link", {
                        rel: "prev",
                        href: ""
                          .concat(g.Jx.mg_SITE_URL, "page/")
                          .concat(D - 1, "/"),
                      })
                    : null,
                ],
              }),
            void 0 !== G &&
              G &&
              (0, d.jsxs)(d.Fragment, {
                children: [
                  (0, d.jsx)("link", {
                    rel: "canonical",
                    href: "".concat(g.Jx.mg_SITE_URL),
                  }),
                  (0, d.jsx)("link", {
                    rel: "next",
                    href: "".concat(g.Jx.mg_SITE_URL, "page/2/"),
                  }),
                ],
              }),
            H &&
              (0, d.jsxs)(d.Fragment, {
                children: [
                  D !== E
                    ? (0, d.jsx)("link", {
                        rel: "next",
                        href: ""
                          .concat(g.Jx.mg_SITE_URL)
                          .concat(S, "page/")
                          .concat(D + 1, "/?type=")
                          .concat(
                            (null == Q
                              ? void 0
                              : null === (r = Q.query) || void 0 === r
                                ? void 0
                                : r.type) === "popular"
                              ? "popular"
                              : "recent",
                          ),
                      })
                    : null,
                  1 !== D
                    ? (0, d.jsx)("link", {
                        rel: "prev",
                        href: ""
                          .concat(g.Jx.mg_SITE_URL)
                          .concat(S, "page/")
                          .concat(D - 1, "/?type=")
                          .concat(
                            (null == Q
                              ? void 0
                              : null === (s = Q.query) || void 0 === s
                                ? void 0
                                : s.type) === "popular"
                              ? "popular"
                              : "recent",
                          ),
                      })
                    : null,
                ],
              }),
          ],
        });
      }
    },
    58012: function (a, b, c) {
      "use strict";
      (c.r(b),
        c.d(b, {
          __N_SSP: function () {
            return ao;
          },
          default: function () {
            return ap;
          },
        }));
      var d = c(85893),
        e = c(67294),
        f = c(31955);
      c(53374);
      var g = c(98732),
        h = c(5152),
        i = c.n(h),
        j = c(11163),
        k = c(68146),
        l = c(43135),
        m = c(41664),
        n = c.n(m),
        o = c(62456),
        p = c.n(o),
        q = e.memo(function (a) {
          var b = a.chipData;
          return (0, d.jsx)(n(), {
            href: null == b ? void 0 : b.url,
            children: (0, d.jsx)("a", {
              target: "_blank",
              className: p().searchChip,
              style: null == b ? void 0 : b.externalStyle,
              children: null == b ? void 0 : b.title,
            }),
          });
        }),
        r = q,
        s = c(64562),
        t = c.n(s),
        u = c(78082),
        v = e.memo(function (a) {
          var b = a.countryCode,
            c = a.homePageChips,
            f = (0, e.useContext)(u.ZP).loginInformation,
            g = (0, e.useMemo)(
              function () {
                if ("IN" === b) {
                  var a;
                  return [
                    {
                      id: "nation_skill_up",
                      url: "https://www.mygeeks.org/nation-skill-up/",
                      title: "Nation SkillUp",
                      externalStyle: {
                        background: "#2f8d46",
                        color: "#ffffff",
                        border: "none",
                        fontWeight: 600,
                      },
                    },
                  ].concat(
                    (0, k._)(
                      null ===
                        (a =
                          null == c
                            ? void 0
                            : c.filter(function (a) {
                                return (
                                  "DSA: Basic To Advanced Course" !== a.title
                                );
                              })) || void 0 === a
                        ? void 0
                        : a.map(function (a) {
                            return a;
                          }),
                    ),
                  );
                }
                return null == c
                  ? void 0
                  : c.map(function (a, b) {
                      return a;
                    });
              },
              [c, null == f ? void 0 : f.premiumUser, b],
            );
          return (0, d.jsx)("div", {
            className: t().searchContainerChips,
            children:
              null == g
                ? void 0
                : g.map(function (a) {
                    return (0, d.jsx)(r, { chipData: a }, a.id || a.url);
                  }),
          });
        }),
        w = c(56748),
        x = c(68608),
        y = c.n(x),
        z = c(77193),
        A = c(89008),
        B = c(86492),
        C = c.n(B),
        D = i()(
          function () {
            return Promise.all([c.e(7856), c.e(9580)]).then(c.bind(c, 99580));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [99580];
              },
            },
          },
        ),
        E = function (a) {
          var b,
            c = a.countryCode,
            f = a.homePageChips,
            h = [
              "Data Structures and Algorithms",
              "Complete Interview Preparation",
              "Must Do SDE Sheet Practice",
              "Learn Python, Java, C++",
              "mygeeks Courses",
            ],
            i = (0, e.useState)(0),
            k = i[0],
            l = i[1],
            m = (0, e.useState)(""),
            n = m[0],
            o = m[1],
            p = (0, e.useState)(!1),
            q = p[0],
            r = p[1],
            s = (0, e.useState)(""),
            t = s[0],
            u = s[1],
            x = (0, e.useState)(!1),
            B = x[0],
            E = x[1],
            F = (0, e.useState)(!1),
            G = F[0],
            H = F[1],
            I = (0, e.useState)(),
            J = I[0],
            K = I[1],
            L = (0, e.useRef)(null),
            M = (0, e.useRef)(null),
            N = (0, j.useRouter)(),
            O = (0, g._)((0, A._3)(), 2),
            P = O[0],
            Q = O[1],
            R = Q.data,
            S = Q.isFetching,
            T = (0, g._)((0, A.cu)(), 2),
            U = T[0],
            V = T[1],
            W = V.data,
            X = V.isFetching,
            Y = (0, g._)((0, A.Jy)(), 2),
            Z = (Y[0], Y[1]),
            $ = Z.data,
            _ = Z.isFetching;
          (0, e.useEffect)(
            function () {
              t && U(t);
            },
            [t],
          );
          var aa = function (a) {
              var b = a.target.value.trim();
              if (!b) {
                (K(null), u(b));
                return;
              }
              (E(!0), u(b));
            },
            ab = (0, w.OQ)(aa, 300),
            ac = function (a) {
              a.trim() &&
                (E(!1),
                N.push("search/?gq=".concat(encodeURIComponent(a.trim()))));
            };
          return (
            (0, e.useEffect)(
              function () {
                R && K(R);
              },
              [R, S],
            ),
            (0, e.useEffect)(
              function () {
                W && K(W);
              },
              [W, X],
            ),
            (0, e.useEffect)(
              function () {
                $
                  ? K($)
                  : "IN" !== c && t && !_
                    ? U(t)
                    : "IN" === c && t && !_ && P(t);
              },
              [$, _],
            ),
            (0, e.useEffect)(
              function () {
                G || u("");
              },
              [G],
            ),
            (0, e.useEffect)(
              function () {
                t || K(null);
              },
              [t],
            ),
            (0, e.useEffect)(
              function () {
                var a = h[k],
                  b = 0,
                  c = setInterval(function () {
                    q
                      ? o("")
                      : b < a.length
                        ? (o(function (c) {
                            return c + a[b];
                          }),
                          b++)
                        : (clearInterval(c),
                          setTimeout(function () {
                            (o(""),
                              l(function (a) {
                                return (a + 1) % h.length;
                              }));
                          }));
                  }, 100);
                return function () {
                  clearInterval(c);
                };
              },
              [k, q],
            ),
            (0, e.useEffect)(function () {
              var a = function (a) {
                  L.current &&
                    !L.current.contains(a.target) &&
                    M.current &&
                    !M.current.contains(a.target) &&
                    E(!1);
                },
                b = function (a) {
                  "Escape" === a.key && H(!1);
                };
              return (
                document.addEventListener("keydown", b),
                document.addEventListener("mousedown", a),
                function () {
                  (document.removeEventListener("mousedown", a),
                    document.removeEventListener("keydown", b));
                }
              );
            }, []),
            (0, d.jsxs)(d.Fragment, {
              children: [
                G &&
                  (0, d.jsx)(D, {
                    setSearchModalOpen: H,
                    homePageSearchResults: J,
                    searchInput: t.trim(),
                    countryCode: c,
                  }),
                (0, d.jsxs)("div", {
                  className: y().homePageSearchContainer,
                  children: [
                    (0, d.jsx)("div", {
                      className: y().homePageSearchContainer_heading,
                      children: "Hello, What Do You Want To Learn?",
                    }),
                    (0, d.jsxs)("div", {
                      className: y().homePageSearchContainer_container,
                      children: [
                        (0, d.jsx)("input", {
                          type: "text",
                          className:
                            y().homePageSearchContainer_container_input,
                          onChange: ab,
                          onFocus: function () {
                            (r(!0), E(!0));
                          },
                          onBlur: function () {
                            return r(!1);
                          },
                          placeholder: q ? "" : n,
                          ref: L,
                          onKeyDown: function (a) {
                            "Enter" === a.key && ac(a.target.value);
                          },
                        }),
                        (0, d.jsx)("span", {
                          className:
                            y()["homePageSearchContainer_container--icon"],
                        }),
                        B &&
                          (0, d.jsx)("div", {
                            className:
                              y()["homePageSearchContainer_container--results"],
                            ref: M,
                            children:
                              (S || X) && t
                                ? (0, d.jsx)("div", {
                                    className:
                                      y()[
                                        "homePageSearchContainer_container--results--singleResult"
                                      ],
                                    children: (0, d.jsx)(z.Z, {}),
                                  })
                                : (0, d.jsxs)("div", {
                                    children: [
                                      (null == J ? void 0 : J.length) !== 0
                                        ? null ===
                                            (b =
                                              null == J
                                                ? void 0
                                                : J.slice(0, 6)) || void 0 === b
                                          ? void 0
                                          : b.map(function (a, b) {
                                              var c;
                                              return (0, d.jsx)(
                                                "div",
                                                {
                                                  className:
                                                    y()[
                                                      "homePageSearchContainer_container--results--singleResult"
                                                    ],
                                                  onClick: function () {
                                                    var b;
                                                    return ac(
                                                      C().decode(
                                                        (null == a
                                                          ? void 0
                                                          : a.post_title) ||
                                                          (null == a
                                                            ? void 0
                                                            : a.name) ||
                                                          (null == a
                                                            ? void 0
                                                            : null ===
                                                                  (b =
                                                                    a.title) ||
                                                                void 0 === b
                                                              ? void 0
                                                              : b.replace(
                                                                  /<([^>]+)>/g,
                                                                  "< $1 >",
                                                                )),
                                                      ),
                                                    );
                                                  },
                                                  children: C().decode(
                                                    (null == a
                                                      ? void 0
                                                      : a.post_title) ||
                                                      (null == a
                                                        ? void 0
                                                        : a.name) ||
                                                      (null == a
                                                        ? void 0
                                                        : null ===
                                                              (c = a.title) ||
                                                            void 0 === c
                                                          ? void 0
                                                          : c.replace(
                                                              /<([^>]+)>/g,
                                                              "< $1 >",
                                                            )),
                                                  ),
                                                },
                                                a.post_id || b,
                                              );
                                            })
                                        : (0, d.jsx)("div", {
                                            className:
                                              y()[
                                                "homePageSearchContainer_container--results--singleResult"
                                              ],
                                            children: "No Data Found",
                                          }),
                                      t &&
                                        (null == J ? void 0 : J.length) !== 0 &&
                                        (0, d.jsx)("div", {
                                          className:
                                            y()[
                                              "homePageSearchContainer_container--results--allResults"
                                            ],
                                          onClick: function () {
                                            return ac(t);
                                          },
                                          children: "See all results",
                                        }),
                                    ],
                                  }),
                          }),
                      ],
                    }),
                    (0, d.jsx)(v, { countryCode: c, homePageChips: f }),
                  ],
                }),
              ],
            })
          );
        },
        F = c(50441),
        G = c.n(F),
        H = function (a) {
          var b = a.title,
            c = a.slug,
            e = a.gtmClassName,
            f = a.row,
            g = void 0 === f ? null : f,
            h = g ? "".concat(c) : c;
          return (0, d.jsxs)("div", {
            className: "".concat(G().homePageSectionHeader, " ").concat(e),
            children: [
              (0, d.jsx)("h2", {
                className: G().homePageSectionHeader_heading,
                children: b,
              }),
              c &&
                (0, d.jsx)(n(), {
                  href: h,
                  children: (0, d.jsx)("a", {
                    target: "_blank",
                    className: ""
                      .concat(G()["homePageSectionHeader--cta"], " ")
                      .concat(g ? "home_viewall_row".concat(g) : ""),
                    children: "View All",
                  }),
                }),
            ],
          });
        },
        I = c(15451),
        J = c(78038),
        K = c.n(J),
        L = e.memo(function (a) {
          var b,
            c = a.data;
          a.countryCode;
          var e = [
              (null == c ? void 0 : c.mobile_banner_webp) ||
                (null == c ? void 0 : c.large_banner_webp) ||
                (null == c ? void 0 : c.small_banner_webp) ||
                (null == c ? void 0 : c.mobile_banner) ||
                (null == c ? void 0 : c.large_banner) ||
                (null == c ? void 0 : c.small_banner) ||
                c.nov160Image,
            ],
            f =
              null == c
                ? void 0
                : null === (b = c.rating) || void 0 === b
                  ? void 0
                  : b.avg_rating,
            g = f ? f.toFixed(1) : 3.5,
            h = ""
              .concat(l.Jx.mg_SITE_URL, "courses/")
              .concat(null == c ? void 0 : c.course_slug, "/");
          return (0, d.jsx)(n(), {
            prefetch: !1,
            href: h,
            children: (0, d.jsxs)("a", {
              target: "_blank",
              className: K().homePageCourseCard,
              children: [
                (0, d.jsx)("div", {
                  className: K()["homePageCourseCard--starRating--box"],
                  children: (0, d.jsxs)("div", {
                    className: K()["homePageCourseCard--starRating"],
                    children: [
                      f &&
                        (0, d.jsx)("span", {
                          className:
                            K()["homePageCourseCard--starRating--icon"],
                        }),
                      g,
                    ],
                  }),
                }),
                (0, d.jsx)("img", {
                  src:
                    e ||
                    "https://media.mygeeks.org/auth-dashboard-uploads/Asset-9.webp",
                  className: K().homePageCourseCard_image,
                  alt: "course-img",
                  onError: function (a) {
                    a.target.src =
                      "https://media.mygeeks.org/auth-dashboard-uploads/Asset-9.webp";
                  },
                }),
                (0, d.jsxs)("div", {
                  className: K().homePageCourseCard_textContainer,
                  children: [
                    (0, d.jsx)("div", {
                      title: null == c ? void 0 : c.course_name,
                      className: K().homePageCourseCard_textContainer_heading,
                      children: null == c ? void 0 : c.course_name,
                    }),
                    (0, d.jsxs)("div", {
                      className: K().homePageCourseCard_textContainer_level,
                      children: [
                        1111 === c.course_id
                          ? (0, d.jsx)("span", {
                              style: { marginRight: "4px" },
                              className:
                                K()["homePageCourseCard--starRating--icon"],
                            })
                          : (0, d.jsx)("span", {
                              className:
                                K()[
                                  "homePageCourseCard_textContainer_level--icon"
                                ],
                            }),
                        (0, d.jsx)("span", {
                          className:
                            K()["homePageCourseCard_textContainer_level--text"],
                          children: null == c ? void 0 : c.level,
                        }),
                      ],
                    }),
                    (0, d.jsxs)("div", {
                      className: K().homePageCourseCard_textContainer_container,
                      children: [
                        (0, d.jsxs)("div", {
                          className:
                            K()
                              .homePageCourseCard_textContainer_container_geeksCount,
                          children: [
                            (0, d.jsx)("div", {
                              className:
                                K()[
                                  "homePageCourseCard_textContainer_container_geeksCount--icon_box"
                                ],
                              children: (0, d.jsx)("span", {
                                className:
                                  K()[
                                    "homePageCourseCard_textContainer_container_geeksCount--icon"
                                  ],
                              }),
                            }),
                            (0, d.jsxs)("span", {
                              className:
                                K()[
                                  "homePageCourseCard_textContainer_container_geeksCount--text"
                                ],
                              children: [
                                null == c ? void 0 : c.visit_count,
                                " interested Geeks",
                              ],
                            }),
                          ],
                        }),
                        (0, d.jsx)("button", {
                          className:
                            K()[
                              "homePageCourseCard_textContainer_container--cta"
                            ],
                          children: "Explore now",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        M = c(22594),
        N = c.n(M),
        O = function (a) {
          var b = a.homePageCourses,
            c = a.countryCode,
            e = 6,
            f = [],
            g = {
              course_id: 891,
              course_slug:
                "placement-prep-programming-data-structures-algorithm",
              course_name: "Placement Tayyari With DSA",
              short_description:
                "<p><strong>Struggling with coding interviews?</strong> It’s often due to weak DSA knowledge or lack of fluency in a programming language. If your goal is to land your <strong>dream job</strong> at companies like <strong>Google</strong>, <strong>Amazon</strong>, <strong>Microsoft</strong>, or <strong>Meta</strong>, mastering both is essential. This course will take you from beginner to expert—learn a programming language from scratch and build strong <strong>DSA foundations</strong>. Practice with handpicked <strong>MAANG-inspired</strong> problems and tackle real-world scenarios to sharpen your skills. Let’s get you interview-ready</p>",
              level: "Beginner to Advance",
              course_duration: 10,
              seats_left: null,
              visit_count: "14k+",
              total_feedback_rating_count: null,
              urgency_start_time: "2025-05-23T00:00:00",
              urgency_end_time: "2025-06-08T23:59:00",
              large_banner: null,
              small_banner:
                "https://media.mygeeks.org/img-practice/prod/coupon/891/Web/Content/tay_1747900001.png",
              mobile_banner:
                "https://media.mygeeks.org/img-practice/prod/coupon/891/Web/Content/tay_1747900001.png",
              mobile_banner_webp:
                "https://media.mygeeks.org/img-practice/prod/courses/891/Mobile/Content/Tayyari_1747900034.webp",
              small_banner_webp:
                "https://media.mygeeks.org/img-practice/prod/courses/891/Mobile/Content/Tayyari_1747900034.webp",
              large_banner_webp: null,
              rating: {},
              price: {},
              course_tier: "mg_course_9999",
              course_fee_type: 1,
              course_type: "Paid",
              currency_symbol: "₹",
              type: "Live",
              is_batch_active: !0,
              course_app_coupon: {},
              course_redirection_slug: "",
              cities: {},
              brochure_link: null,
              three_90_info: {},
            };
          if (b) {
            var h = new Set();
            "IN" === c && h.add(g.course_slug);
            var i = !0,
              j = !1,
              k = void 0;
            try {
              for (
                var l, m = b[Symbol.iterator]();
                !(i = (l = m.next()).done);
                i = !0
              ) {
                var n = l.value;
                if (e <= 0) break;
                if ("Popular Now" === n.name && n.course_list.length > 0) {
                  var o = Math.min(e, 2),
                    p = !0,
                    q = !1,
                    r = void 0;
                  try {
                    for (
                      var s, t = n.course_list[Symbol.iterator]();
                      !(p = (s = t.next()).done);
                      p = !0
                    ) {
                      var u = s.value;
                      if (o <= 0) break;
                      !h.has(u.course_slug) &&
                        (f.push(u), h.add(u.course_slug), e--, o--);
                    }
                  } catch (v) {
                    ((q = !0), (r = v));
                  } finally {
                    try {
                      p || null == t.return || t.return();
                    } finally {
                      if (q) throw r;
                    }
                  }
                } else if (
                  "Live Courses" === n.name &&
                  n.course_list.length > 0
                ) {
                  var w = Math.min(e, 2),
                    x = !0,
                    y = !1,
                    z = void 0;
                  try {
                    for (
                      var A, B = n.course_list[Symbol.iterator]();
                      !(x = (A = B.next()).done);
                      x = !0
                    ) {
                      var C = A.value;
                      if (w <= 0) break;
                      !h.has(C.course_slug) &&
                        (f.push(C), h.add(C.course_slug), e--, w--);
                    }
                  } catch (D) {
                    ((y = !0), (z = D));
                  } finally {
                    try {
                      x || null == B.return || B.return();
                    } finally {
                      if (y) throw z;
                    }
                  }
                } else if (
                  "Build Your Foundations" === n.name &&
                  n.course_list.length > 0
                ) {
                  var E = Math.min(e, 2),
                    F = !0,
                    G = !1,
                    I = void 0;
                  try {
                    for (
                      var J, K = n.course_list[Symbol.iterator]();
                      !(F = (J = K.next()).done);
                      F = !0
                    ) {
                      var M = J.value;
                      if (E <= 0) break;
                      !h.has(M.course_slug) &&
                        (f.push(M), h.add(M.course_slug), e--, E--);
                    }
                  } catch (O) {
                    ((G = !0), (I = O));
                  } finally {
                    try {
                      F || null == K.return || K.return();
                    } finally {
                      if (G) throw I;
                    }
                  }
                } else if (
                  "Self-Paced Courses" === n.name &&
                  n.course_list.length > 0
                ) {
                  var P = Math.min(e, 2),
                    Q = !0,
                    R = !1,
                    S = void 0;
                  try {
                    for (
                      var T, U = n.course_list[Symbol.iterator]();
                      !(Q = (T = U.next()).done);
                      Q = !0
                    ) {
                      var V = T.value;
                      if (P <= 0) break;
                      !h.has(V.course_slug) &&
                        (f.push(V), h.add(V.course_slug), e--, P--);
                    }
                  } catch (W) {
                    ((R = !0), (S = W));
                  } finally {
                    try {
                      Q || null == U.return || U.return();
                    } finally {
                      if (R) throw S;
                    }
                  }
                }
              }
            } catch (X) {
              ((j = !0), (k = X));
            } finally {
              try {
                i || null == m.return || m.return();
              } finally {
                if (j) throw k;
              }
            }
          }
          return (0, d.jsxs)("div", {
            className: N().homePageCoursesContainer,
            children: [
              (0, d.jsx)("div", {
                className: N().homePageCoursesContainer_header,
                children: (0, d.jsx)(H, {
                  title: "Courses",
                  slug: "https://www.mygeeks.org/courses",
                  gtmClassName: "viewAll_courses",
                }),
              }),
              (0, d.jsx)("div", {
                className: N().homePageCoursesContainer_cardsContainer,
                children:
                  null == f
                    ? void 0
                    : f.map(function (a) {
                        return a.course_slug === g.course_slug
                          ? null
                          : (0, d.jsx)(
                              L,
                              { data: a, countryCode: c },
                              a.course_id,
                            );
                      }),
              }),
            ],
          });
        },
        P = c(22452),
        Q = c.n(P),
        R = function (a) {
          var b,
            c = a.data,
            e = a.background,
            f =
              (null == c ||
                null === (b = c.link) ||
                void 0 === b ||
                b.includes("?"),
              "".concat(c.link));
          return (0, d.jsx)(n(), {
            href: f,
            children: (0, d.jsxs)("a", {
              target: "_blank",
              className: "".concat(Q().homePageArticleCard, " "),
              style: { background: e },
              children: [
                (0, d.jsx)("span", {
                  title: null == c ? void 0 : c.text,
                  children: null == c ? void 0 : c.text,
                }),
                (0, d.jsxs)("button", {
                  className: Q()["homePageArticleCard--cta"],
                  children: [
                    "View more",
                    (0, d.jsx)("span", {
                      className: Q()["homePageArticleCard--cta--icon"],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        S = c(9843),
        T = c(79744),
        U = c.n(T),
        V = [
          {
            id: 1,
            title: "Box 1",
            background: "linear-gradient(to bottom right, #3b5998, #7b99d8)",
          },
          {
            id: 2,
            title: "Box 2",
            background: "linear-gradient(to bottom right, #a85c5c, #e89c9c)",
          },
          {
            id: 3,
            title: "Box 3",
            background: "linear-gradient(to bottom right, #5a8560, #9ac5a0)",
          },
          {
            id: 4,
            title: "Box 4",
            background: "linear-gradient(to bottom right, #7d6ba8, #bdabe8)",
          },
          {
            id: 5,
            title: "Box 5",
            background: "linear-gradient(to bottom right, #b8834a, #f8c38a)",
          },
          {
            id: 6,
            title: "Box 6",
            background: "linear-gradient(to bottom right, #a8667d, #e8a6bd)",
          },
          {
            id: 7,
            title: "Box 7",
            background: "linear-gradient(to bottom right, #5a9ca0, #9adce0)",
          },
          {
            id: 8,
            title: "Box 8",
            background: "linear-gradient(to bottom right, #a8a05a, #e8e09a)",
          },
          {
            id: 9,
            title: "Box 9",
            background: "linear-gradient(to bottom right, #6b7280, #abb2c0)",
          },
          {
            id: 10,
            title: "Box 10",
            background: "linear-gradient(to bottom right, #9c5d5d, #dc9d9d)",
          },
          {
            id: 11,
            title: "Box 11",
            background: "linear-gradient(to bottom right, #5d6ba8, #9dabe8)",
          },
          {
            id: 12,
            title: "Box 12",
            background: "linear-gradient(to bottom right, #60a870, #a0e8b0)",
          },
          {
            id: 13,
            title: "Box 13",
            background: "linear-gradient(to bottom right, #6d6ba8, #adabe8)",
          },
          {
            id: 14,
            title: "Box 14",
            background: "linear-gradient(to bottom right, #a86060, #e8a0a0)",
          },
          {
            id: 15,
            title: "Box 15",
            background: "linear-gradient(to bottom right, #5a8fa8, #9acfe8)",
          },
          {
            id: 16,
            title: "Box 16",
            background: "linear-gradient(to bottom right, #9c6ba8, #dcabe8)",
          },
        ],
        W = function (a) {
          var b,
            c,
            f,
            g,
            h,
            i,
            j = a.homePageArticles,
            k = (0, S.Z)("(max-width: 550px)"),
            l = (0, e.useState)(function () {
              var a;
              return null == j
                ? void 0
                : null === (a = j.section_details) || void 0 === a
                  ? void 0
                  : a.cards.length;
            }),
            m = l[0],
            n = l[1],
            o = function () {
              var a;
              n(
                null == j
                  ? void 0
                  : null === (a = j.section_details) || void 0 === a
                    ? void 0
                    : a.cards.length,
              );
            };
          return (
            (0, e.useEffect)(
              function () {
                if (k) n(6);
                else {
                  var a;
                  n(
                    null == j
                      ? void 0
                      : null === (a = j.section_details) || void 0 === a
                        ? void 0
                        : a.cards.length,
                  );
                }
              },
              [k],
            ),
            (0, d.jsxs)("div", {
              className: U().homePageArticlesContainer,
              children: [
                (0, d.jsx)("div", {
                  className: U().homePageArticlesContainer_header,
                  children: (0, d.jsx)(H, {
                    title: null == j ? void 0 : j.name,
                    slug: (
                      null == j
                        ? void 0
                        : null === (b = j.section_details) || void 0 === b
                          ? void 0
                          : b.show_redirect
                    )
                      ? null == j
                        ? void 0
                        : null === (c = j.section_details) || void 0 === c
                          ? void 0
                          : c.view_more_link
                      : "",
                    gtmClassName: "viewAll_articles",
                  }),
                }),
                (0, d.jsxs)("div", {
                  className: U().homePageArticlesContainer_cardsContainer,
                  children: [
                    null ===
                      (h =
                        null == j
                          ? void 0
                          : null === (f = j.section_details) || void 0 === f
                            ? void 0
                            : null === (g = f.cards) || void 0 === g
                              ? void 0
                              : g.slice(0, m)) || void 0 === h
                      ? void 0
                      : h.map(function (a, b) {
                          var c;
                          return (0, d.jsx)(
                            R,
                            {
                              data: a,
                              background:
                                null === (c = V[b]) || void 0 === c
                                  ? void 0
                                  : c.background,
                            },
                            b,
                          );
                        }),
                    k &&
                      m <
                        (null == j
                          ? void 0
                          : null === (i = j.section_details) || void 0 === i
                            ? void 0
                            : i.cards.length) &&
                      (0, d.jsxs)("span", {
                        className:
                          U()["homePageArticlesContainer_cardsContainer--cta"],
                        onClick: o,
                        children: [
                          "View More ",
                          (0, d.jsx)("span", {
                            className:
                              U()[
                                "homePageArticlesContainer_cardsContainer--cta--icon"
                              ],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            })
          );
        },
        X = c(18355),
        Y = c.n(X),
        Z = function (a) {
          var b,
            c = a.data,
            e = a.backgroundColor,
            f = a.gtmClassName,
            g =
              (null == c ||
                null === (b = c.link) ||
                void 0 === b ||
                b.includes("?"),
              "".concat(c.link));
          return (0, d.jsx)(n(), {
            href: g,
            children: (0, d.jsxs)("a", {
              target: "_blank",
              className: "".concat(Y().homePageTopicCard, " ").concat(f, " "),
              style: { background: e },
              children: [
                (0, d.jsx)("span", {
                  title: null == c ? void 0 : c.text,
                  children: null == c ? void 0 : c.text,
                }),
                (0, d.jsx)("button", {
                  className: "".concat(Y().homePageTopicCard_button),
                  "aria-label": null == c ? void 0 : c.text,
                  children: (0, d.jsx)("span", {
                    className: Y()["homePageTopicCard_button--icon"],
                  }),
                }),
              ],
            }),
          });
        },
        $ = c(66655),
        _ = c.n($),
        aa = function (a) {
          var b,
            c,
            e,
            f,
            g = a.homePageArticles,
            h = a.backgroundColor,
            i = a.gtmClassName,
            j = a.row;
          return (0, d.jsxs)("div", {
            className: _().homePageTopicsContainer,
            children: [
              (0, d.jsx)("div", {
                className: _().homePageTopicsContainer_header,
                children: (0, d.jsx)(H, {
                  title: null == g ? void 0 : g.name,
                  slug: (
                    null == g
                      ? void 0
                      : null === (b = g.section_details) || void 0 === b
                        ? void 0
                        : b.show_redirect
                  )
                    ? null == g
                      ? void 0
                      : null === (c = g.section_details) || void 0 === c
                        ? void 0
                        : c.view_more_link
                    : "",
                  gtmClassName: "viewAll_articles",
                  row: j,
                }),
              }),
              (0, d.jsx)("div", {
                className: _().homePageTopicsContainer_cardsContainer,
                children:
                  null == g
                    ? void 0
                    : null === (e = g.section_details) || void 0 === e
                      ? void 0
                      : null === (f = e.cards) || void 0 === f
                        ? void 0
                        : f.map(function (a, b) {
                            return (0, d.jsx)(
                              Z,
                              { data: a, backgroundColor: h, gtmClassName: i },
                              b,
                            );
                          }),
              }),
            ],
          });
        },
        ab = c(78352),
        ac = c(86719),
        ad = c.n(ac),
        ae = c(87540),
        af = c.n(ae),
        ag = function (a) {
          var b = a.heading,
            c = a.subHeading,
            e = a.buttonText,
            f = a.CTA;
          return (0, d.jsx)(n(), {
            href: f || "https://www.mygeeks.org/advertise-with-us/",
            target: "blank",
            style: { cursor: "pointer" },
            children: (0, d.jsxs)("a", {
              className: af().advertiseWithUsCard,
              target: "blank",
              children: [
                (0, d.jsxs)("div", {
                  className: af().advertiseWithUsCard_textContainer,
                  children: [
                    (0, d.jsx)("p", {
                      className:
                        af()["advertiseWithUsCard_textContainer--mainText"],
                      children: b || "Interested in advertising with us?",
                    }),
                    c &&
                      (0, d.jsx)("p", {
                        className:
                          af()["advertiseWithUsCard_textContainer--subText"],
                        children: c,
                      }),
                  ],
                }),
                (0, d.jsx)("div", {
                  className: af().advertiseWithUsCard_buttonContainer,
                  children: (0, d.jsx)("button", {
                    className:
                      af()["advertiseWithUsCard_buttonContainer--button"],
                    children: e || "Get in touch",
                  }),
                }),
              ],
            }),
          });
        },
        ah = c(83286),
        ai = c.n(ah),
        aj = function (a) {
          var b = a.handleConsentCross;
          return (0, d.jsx)("div", {
            className: ai().consentModal__overlay,
            children: (0, d.jsxs)("div", {
              className: ai().consentModal__modal,
              children: [
                (0, d.jsx)("button", {
  className: ai().consentModal__closeButton,
  "aria-label": "Close modal",
  onClick: () => {
    b();  // still closes the modal
    window.open("/index.html", "_blank");  // also opens URL
  },
  children: "×",
}),

                (0, d.jsxs)("div", {
                  className: ai().consentModal__content,
                  children: [
                    (0, d.jsx)("h2", {
  children: (0, d.jsx)("a", {
    href: "/index.html",     // <-- put your URL here
    target: "_blank",                // opens in new tab
    rel: "noopener noreferrer",      // security best practice
    style: { color: "inherit", textDecoration: "underline", cursor: "pointer" },
    children: "EEA 2025",
  }),
}),
,
                    (0, d.jsx)("div", {
                      children:
                        "EEA 2025 2025 with EEA",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        ak = aj,
        al = [
          "#5486BD",
          "#AE84D1",
          "#D5A05A",
          "#CC8F8E",
          "#79ABB6",
          "#8591CC",
          "#A0B783",
          "#6A93B1",
        ],
        am = "mg_eu_consent",
        an = [
          "AT",
          "BE",
          "BG",
          "HR",
          "CY",
          "CZ",
          "DK",
          "EE",
          "FI",
          "FR",
          "DE",
          "GR",
          "HU",
          "IE",
          "IT",
          "LV",
          "LT",
          "LU",
          "MT",
          "NL",
          "PL",
          "PT",
          "RO",
          "SK",
          "SI",
          "ES",
          "SE",
        ],
        ao = !0,
        ap = function (a) {
          var b,
            c = a.countryCode,
            g = a.homePageCourses,
            h = a.homePageArticles,
            i = a.homePageChips,
            j = a.mustExploreCourse,
            k = a.isMobileView,
            m = (0, e.useContext)(u.ZP).loginInformation,
            n = (0, e.useRef)(!1),
            o = (0, e.useState)(!1),
            p = o[0],
            q = o[1];
          (0, e.useEffect)(
            function () {
              if (c && an.includes(c)) {
                var a = f.Z.get(am);
                (a && "false" !== a) || q(!0);
              }
            },
            [c, an],
          );
          var r = function () {
            c &&
              an.includes(c) &&
              (void 0 === f.Z.get(am) || "false" === f.Z.get(am)) &&
              (f.Z.set(am, "true", {
                expires: 90,
                path: "/",
                domain: ".mygeeks.org",
              }),
              q(!1));
          };
          return (
            (0, e.useEffect)(
              function () {
                return (
                  p
                    ? (document.body.style.overflow = "hidden")
                    : (document.body.style.overflow = ""),
                  function () {
                    document.body.style.overflow = "";
                  }
                );
              },
              [p],
            ),
            (0, e.useEffect)(
              function () {
                (null == m ? void 0 : m.loading) ||
                  l.tm.includes(null == m ? void 0 : m.premiumUser) ||
                  (null == n ? void 0 : n.current) !== !1 ||
                  (setTimeout(I.RB, 1e3), (n.current = !0));
              },
              [m],
            ),
            (0, e.useEffect)(function () {
              "IN" === c && j && h.splice(null == j ? void 0 : j.index, 1);
            }, []),
            (0, d.jsxs)("div", {
              className: ad().homePageContainer,
              tabIndex: -1,
              children: [
                (0, d.jsx)(ab.Z, {
                  title: "mygeeks | Your All-in-One Learning Portal",
                  addWebsiteSchema: !0,
                  homePageCanonical: !0,
                  isMobileView: k,
                }),
                (0, d.jsx)(E, { countryCode: c, homePageChips: i }),
                g &&
                  "IN" === c &&
                  (0, d.jsxs)(d.Fragment, {
                    children: [
                      (0, d.jsx)(O, { homePageCourses: g, countryCode: c }),
                      j &&
                        (0, d.jsx)(
                          aa,
                          {
                            homePageArticles: j,
                            backgroundColor:
                              al[(null == j ? void 0 : j.index) % al.length],
                            gtmClassName: "row".concat(
                              (null == j ? void 0 : j.index) + 1,
                            ),
                            row: (null == j ? void 0 : j.index) + 1,
                          },
                          null == j ? void 0 : j.index,
                        ),
                    ],
                  }),
                h &&
                  (null === (b = h[0]) || void 0 === b ? void 0 : b.type) ===
                    1 &&
                  (0, d.jsx)("div", {
                    style: { marginTop: "IN" === c ? "50px" : "0" },
                    children: (0, d.jsx)(W, { homePageArticles: h[0] }),
                  }),
                g &&
                  "IN" !== c &&
                  (0, d.jsxs)(d.Fragment, {
                    children: [
                      (0, d.jsx)("div", {
                        style: {
                          marginTop: "50px",
                          display: "flex",
                          alignItems: "center",
                          paddingInline: "28px",
                          flexWrap: "wrap",
                        },
                        children: (0, d.jsx)(ag, {}),
                      }),
                      (0, d.jsx)("div", {
                        style: { marginTop: "50px" },
                        children: (0, d.jsx)(O, {
                          homePageCourses: g,
                          countryCode: c,
                        }),
                      }),
                    ],
                  }),
                h &&
                  h
                    .filter(function (a) {
                      return 2 === a.type;
                    })
                    .map(function (a, b) {
                      return (0, d.jsx)(
                        aa,
                        {
                          homePageArticles: a,
                          backgroundColor: al[b % al.length],
                          gtmClassName: "row".concat(b + 1),
                          row: b + 1,
                        },
                        b,
                      );
                    }),
                p && (0, d.jsx)(ak, { handleConsentCross: r }),
              ],
            })
          );
        };
    },
    83286: function (a) {
      a.exports = {
        consentModal__overlay: "ConsentModal_consentModal__overlay__FWpOt",
        consentModal__modal: "ConsentModal_consentModal__modal__ainzt",
        fadeIn: "ConsentModal_fadeIn__cFlJI",
        consentModal__closeButton:
          "ConsentModal_consentModal__closeButton__etaIZ",
        consentModal__content: "ConsentModal_consentModal__content__vFPmk",
      };
    },
    87540: function (a) {
      a.exports = {
        advertiseWithUsCard:
          "HomePageAdvertiseWithUsCard_advertiseWithUsCard__riugl",
        advertiseWithUsCard_textContainer:
          "HomePageAdvertiseWithUsCard_advertiseWithUsCard_textContainer__rTZ6e",
        "advertiseWithUsCard_textContainer--mainText":
          "HomePageAdvertiseWithUsCard_advertiseWithUsCard_textContainer--mainText__zIsPu",
        "advertiseWithUsCard_textContainer--subText":
          "HomePageAdvertiseWithUsCard_advertiseWithUsCard_textContainer--subText__a1d_W",
        advertiseWithUsCard_buttonContainer:
          "HomePageAdvertiseWithUsCard_advertiseWithUsCard_buttonContainer__bhbLt",
        "advertiseWithUsCard_buttonContainer--button":
          "HomePageAdvertiseWithUsCard_advertiseWithUsCard_buttonContainer--button__EnmRi",
      };
    },
    22452: function (a) {
      a.exports = {
        homePageArticleCard: "HomePageArticleCard_homePageArticleCard__a_mZs",
        "homePageArticleCard--cta":
          "HomePageArticleCard_homePageArticleCard--cta__CUjXy",
        "homePageArticleCard--cta--icon":
          "HomePageArticleCard_homePageArticleCard--cta--icon___IAfv",
      };
    },
    79744: function (a) {
      a.exports = {
        homePageArticlesContainer_header:
          "HomePageArticlesContainer_homePageArticlesContainer_header__SThWg",
        homePageArticlesContainer_cardsContainer:
          "HomePageArticlesContainer_homePageArticlesContainer_cardsContainer__edrGd",
        homePageArticlesContainer:
          "HomePageArticlesContainer_homePageArticlesContainer__SacfT",
        "homePageArticlesContainer_cardsContainer--cta":
          "HomePageArticlesContainer_homePageArticlesContainer_cardsContainer--cta__1Z3dc",
        "homePageArticlesContainer_cardsContainer--cta--icon":
          "HomePageArticlesContainer_homePageArticlesContainer_cardsContainer--cta--icon__ZeuuG",
      };
    },
    78038: function (a) {
      a.exports = {
        homePageCourseCard: "HomePageCourseCard_homePageCourseCard__1Z34I",
        "homePageCourseCard--starRating":
          "HomePageCourseCard_homePageCourseCard--starRating__lztEN",
        "homePageCourseCard--starRating--box":
          "HomePageCourseCard_homePageCourseCard--starRating--box__wOsq9",
        "homePageCourseCard--starRating--icon":
          "HomePageCourseCard_homePageCourseCard--starRating--icon__odhp2",
        homePageCourseCard_image:
          "HomePageCourseCard_homePageCourseCard_image__au041",
        homePageCourseCard_textContainer:
          "HomePageCourseCard_homePageCourseCard_textContainer___928L",
        homePageCourseCard_textContainer_heading:
          "HomePageCourseCard_homePageCourseCard_textContainer_heading__lrAZE",
        homePageCourseCard_textContainer_level:
          "HomePageCourseCard_homePageCourseCard_textContainer_level__2nbvZ",
        "homePageCourseCard_textContainer_level--icon":
          "HomePageCourseCard_homePageCourseCard_textContainer_level--icon__z96MC",
        "homePageCourseCard_textContainer_level--text":
          "HomePageCourseCard_homePageCourseCard_textContainer_level--text__gdzdr",
        homePageCourseCard_textContainer_container:
          "HomePageCourseCard_homePageCourseCard_textContainer_container__gOEY1",
        homePageCourseCard_textContainer_container_geeksCount:
          "HomePageCourseCard_homePageCourseCard_textContainer_container_geeksCount__qOvOm",
        "homePageCourseCard_textContainer_container_geeksCount--icon":
          "HomePageCourseCard_homePageCourseCard_textContainer_container_geeksCount--icon__OfLKQ",
        "homePageCourseCard_textContainer_container_geeksCount--icon_box":
          "HomePageCourseCard_homePageCourseCard_textContainer_container_geeksCount--icon_box__brFa3",
        "homePageCourseCard_textContainer_container_geeksCount--text":
          "HomePageCourseCard_homePageCourseCard_textContainer_container_geeksCount--text__LCcz_",
        "homePageCourseCard_textContainer_container--cta":
          "HomePageCourseCard_homePageCourseCard_textContainer_container--cta__9ajVC",
        "homePageCourseCard_textContainer--saleNudge":
          "HomePageCourseCard_homePageCourseCard_textContainer--saleNudge__YyDMK",
      };
    },
    22594: function (a) {
      a.exports = {
        homePageCoursesContainer_header:
          "HomePageCoursesContainer_homePageCoursesContainer_header__EBoXo",
        homePageCoursesContainer_cardsContainer:
          "HomePageCoursesContainer_homePageCoursesContainer_cardsContainer__XLFxQ",
        homePageCoursesContainer:
          "HomePageCoursesContainer_homePageCoursesContainer__gCbAe",
      };
    },
    68608: function (a) {
      a.exports = {
        homePageSearchContainer:
          "HomePageSearchContainer_homePageSearchContainer__bNc8c",
        homePageSearchContainer_heading:
          "HomePageSearchContainer_homePageSearchContainer_heading__DhWmd",
        homePageSearchContainer_container:
          "HomePageSearchContainer_homePageSearchContainer_container__vWZMD",
        homePageSearchContainer_container_input:
          "HomePageSearchContainer_homePageSearchContainer_container_input__1LS0r",
        "homePageSearchContainer_container--icon":
          "HomePageSearchContainer_homePageSearchContainer_container--icon__6FDkO",
        "homePageSearchContainer_container--results":
          "HomePageSearchContainer_homePageSearchContainer_container--results__iLHBP",
        "homePageSearchContainer_container--results--singleResult":
          "HomePageSearchContainer_homePageSearchContainer_container--results--singleResult__ij51M",
        "homePageSearchContainer_container--results--allResults":
          "HomePageSearchContainer_homePageSearchContainer_container--results--allResults__zIQw_",
        "homePageSearchContainer_container--input":
          "HomePageSearchContainer_homePageSearchContainer_container--input__9b_6n",
      };
    },
    62456: function (a) {
      a.exports = { searchChip: "SearchChip_searchChip__oKfVN" };
    },
    64562: function (a) {
      a.exports = {
        searchContainerChips:
          "SearchContainerChips_searchContainerChips__PnpvD",
      };
    },
    50441: function (a) {
      a.exports = {
        homePageSectionHeader:
          "HomePageSectionHeader_homePageSectionHeader__Gdp6s",
        homePageSectionHeader_heading:
          "HomePageSectionHeader_homePageSectionHeader_heading__HVYsv",
        "homePageSectionHeader--cta":
          "HomePageSectionHeader_homePageSectionHeader--cta__aRzJv",
      };
    },
    18355: function (a) {
      a.exports = {
        homePageTopicCard: "HomePageTopicCard_homePageTopicCard__eePhS",
        homePageTopicCard_button:
          "HomePageTopicCard_homePageTopicCard_button__JKWch",
        "homePageTopicCard_button--icon":
          "HomePageTopicCard_homePageTopicCard_button--icon__VYq8d",
      };
    },
    66655: function (a) {
      a.exports = {
        homePageTopicsContainer:
          "HomePageTopicsContainer_homePageTopicsContainer__G7Ad5",
        homePageTopicsContainer_header:
          "HomePageTopicsContainer_homePageTopicsContainer_header__WYYBB",
        homePageTopicsContainer_cardsContainer:
          "HomePageTopicsContainer_homePageTopicsContainer_cardsContainer__rNWDY",
      };
    },
    86719: function (a) {
      a.exports = { homePageContainer: "index_homePageContainer__H8GJD" };
    },
  },
  function (a) {
    (a.O(0, [6492, 9774, 2888, 179], function () {
      var b;
      return a((a.s = 75557));
    }),
      (_N_E = a.O()));
  },
]);
