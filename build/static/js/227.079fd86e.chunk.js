(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [227],
  {
    2407: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(36),
        c = t(0),
        l = t.n(c),
        r = t(56),
        s = t(1152),
        o = t(1153),
        u = t(41),
        m = t.n(u),
        i = t(796),
        d = t.n(i);
      a.default = function () {
        var e = Object(c.useState)(""),
          a = Object(n.a)(e, 2),
          t = a[0],
          u = a[1],
          i = Object(r.g)();
        return l.a.createElement(
          "div",
          null,
          l.a.createElement(
            "h2",
            { className: "d-flex justify-content-center" },
            "Update dollar Payout"
          ),
          l.a.createElement(
            s.a,
            { className: " mx-1 mt-2 mb-2 " },
            l.a.createElement(o.a, null),
            l.a.createElement(
              o.a,
              { lg: "2" },
              l.a.createElement(r.b, {
                render: function (e) {
                  var a = e.history;
                  return l.a.createElement(
                    "button",
                    {
                      className: " btn btn-danger float-right",
                      onClick: function () {
                        return a.push(
                          "/app/brahmaand/leaderboard/userearning/"
                        );
                      },
                    },
                    "Back"
                  );
                },
              })
            )
          ),
          l.a.createElement(
            s.a,
            { className: "mb-3" },
            l.a.createElement(
              o.a,
              { lg: "4" },
              l.a.createElement("h5", null, "Dollar value"),
              l.a.createElement("input", {
                className: "form-control",
                type: "number",
                onChange: function (e) {
                  u(e.target.value);
                },
                value: t,
              })
            ),
            l.a.createElement(
              o.a,
              { style: { marginTop: "26px" } },
              l.a.createElement(
                "button",
                {
                  onClick: function () {
                    m.a
                      .post(
                        "http://15.207.117.200:9000/admin/payout/".concat(i.id),
                        { payout: t }
                      )
                      .then(function (e) {
                        console.log(e.data.message),
                          "success" == e.data.message &&
                            d()("Updated Successfully");
                      })
                      .catch(function (e) {
                        console.log(e);
                      });
                  },
                  class: "btn btn-success",
                },
                "Update"
              )
            )
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=227.079fd86e.chunk.js.map
