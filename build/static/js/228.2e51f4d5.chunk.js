(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [228],
  {
    2405: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(36),
        l = a(41),
        r = a.n(l),
        c = a(0),
        o = a.n(c),
        u = a(1837),
        i = a(42),
        d = a(859);
      t.default = function () {
        var e = Object(c.useState)([]),
          t = Object(n.a)(e, 2),
          a = t[0],
          l = t[1];
        Object(c.useEffect)(function () {
          m();
        }, []);
        var m = function () {
          r.a
            .get("http://15.207.117.200:9000/user/user_planet_position")
            .then(function (e) {
              l(e.data.data);
            })
            .catch(function (e) {
              return console.log(e);
            });
        };
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement("hr", null),
          o.a.createElement(
            "h3",
            { className: "d-flex justify-content-center mt-2" },
            "Update Planet Positions Metors"
          ),
          o.a.createElement("hr", null),
          o.a.createElement(
            d.a,
            { striped: !0, bordered: !0, hover: !0 },
            o.a.createElement(
              "thead",
              { "aria-colspan": 1 },
              o.a.createElement(
                "tr",
                null,
                o.a.createElement("th", null, "No."),
                o.a.createElement("th", null, "Planet image"),
                o.a.createElement("th", null, "Planet Name"),
                o.a.createElement("th", null, "Meteors Range"),
                o.a.createElement("th", null, "Dollar value"),
                o.a.createElement("th", null, "Action")
              )
            ),
            o.a.createElement(
              "tbody",
              null,
              "" !== a
                ? null === a || void 0 === a
                  ? void 0
                  : a.map(function (e, t) {
                      return o.a.createElement(
                        "tr",
                        { key: e._id },
                        o.a.createElement("td", null, t + 1),
                        o.a.createElement(
                          "td",
                          null,
                          o.a.createElement("img", {
                            style: { width: "70px" },
                            src: null === e || void 0 === e ? void 0 : e.img,
                          })
                        ),
                        o.a.createElement(
                          "td",
                          null,
                          null === e || void 0 === e ? void 0 : e.planet_name
                        ),
                        o.a.createElement(
                          "td",
                          null,
                          null === e || void 0 === e ? void 0 : e.point_range
                        ),
                        o.a.createElement(
                          "td",
                          null,
                          "$",
                          null === e || void 0 === e ? void 0 : e.doller_rupees
                        ),
                        o.a.createElement(
                          "td",
                          null,
                          o.a.createElement(
                            i.b,
                            {
                              to: "/app/brahmaand/leaderboard/editplanet/".concat(
                                e._id
                              ),
                            },
                            o.a.createElement(u.a, {
                              className: "aifillediticon",
                              size: 30,
                              style: { color: "green", border: "none" },
                            })
                          )
                        )
                      );
                    })
                : null
            )
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=228.2e51f4d5.chunk.js.map
