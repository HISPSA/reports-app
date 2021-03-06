const steps = [
    require('./shared.steps'),
    require('./home.steps'),
    require('./help.steps'),
    require('./standardReport.steps'),
    require('./resource.steps'),
    require('./getReportPages.steps'),
    require('./dataApproval.steps'),
    require('./organisationUnitDistributionReport.steps'),
];

module.exports = function () {
    steps.forEach(function (step) {
        step.call(this);
    }.bind(this));
};
