export const i18nKeys = {
    buttons: {
        cancel: 'Cancel',
        save: 'Save',
        downloadAsExcel: 'Download as excel',
    },
    datasetsDropdown: {
        hintText: 'Select Data Set',
        dataSetLabel: 'Data set',
    },
    dimensionsDropdown: {
        hintText: 'Select Option',
    },
    organisationUnitGroupSetDropdown: {
        hintText: 'Select Option',
    },
    periodPicker: {
        periodLabel: 'Period',
        periodTypeHintText: 'Select Period Type',
        /* do not change property names, those are ids from period types server */
        labels: {
            Daily: 'Daily',
            Weekly: 'Weekly',
            WeeklyWednesday: 'Weekly Wednesday',
            WeeklyThursday: 'Weekly Thursday',
            WeeklySaturday: 'Weekly Saturday',
            WeeklySunday: 'Weekly Sunday',
            BiWeekly: 'Bi-Weekly',
            Monthly: 'Monthly',
            BiMonthly: 'Bi-Monthly',
            Quarterly: 'Quarterly',
            SixMonthly: 'Six-Monthly',
            SixMonthlyApril: 'Six-Monthly April',
            Yearly: 'Yearly',
            FinancialApril: 'Financial-April',
            FinancialJuly: 'Financial-July',
            FinancialOct: 'Financial-Oct',
        },
    },
    availableOrganisationUnitsTree: {
        updatingMessage: 'Updating Organisation Units Tree...',
        treeLabel: 'Organisation Unit',
    },
    standardReport: {
        homeLabel: 'Standard Report',
        homeAction: 'View Reports',
        header: 'Standard Report',
        description: 'View and add reports based on the JasperReports library. ' +
        'These can be based on report tables and can be designed in iReport.',
        search: 'Search',
        details: 'Details',
        settings: 'Settings',
        relativePeriods: 'Relative periods',
        reportParameters: 'Report parameters',
        cacheStrategy: 'Cache Strategy',
        reportingPeriod: 'Reporting Pperiod',
        reportingOrganisationUnit: 'Organization Unit',
        addNewReport: {
            title: 'Add New Report',
            reportRightsMessage: 'This object will be created with public edit and view rights',
            nameLabel: 'Name',
            typeLabel: 'Type',
            designFileLabel: 'Design File',
            reportTableLabel: 'Report table',
        },
        editReport: {
            title: 'Edit Report',
        },
        createReport: {
            title: 'Create Report Table',
        },
        removeReport: {
            title: 'Remove Report',
        },
    },
    dataSetReport: {
        homeLabel: 'Data Set Report',
        homeAction: 'Get Report',
        header: 'Data Set Report',
        description: 'View data set reports. These reports are based on data entry screens and ' +
        'will produce a report with aggregated data.',
        reportPeriodLabel: 'Report period',
        selectedDataSetOnlyLabel: 'Use data for selected unit only',
        organisationUnitLabel: 'Report organisation unit',
        sharePlaceholder: 'Write a comment, question or interpretation of this report',
        showMoreOptions: 'Show more options',
        mainAction: 'Get Report',
        exportReport: 'download as xls',
        share: 'Share',
        interpretationShared: 'Interpretation Shared',
    },
    reportingRateSummary: {
        homeLabel: 'Report Rate Summary',
        homeAction: 'Get Report',
        header: 'Report Rate Summary',
        description: 'Browse the reporting rates of data sets by organisation unit and period based' +
        ' on various criteria for submission.',
    },
    resource: {
        homeLabel: 'Resource',
        homeAction: 'View Resources',
        header: 'Resource',
        description: 'View and add resources. These resources can be uploaded documents or URLs on the web.',
    },
    organisationUnitDistributionReport: {
        homeLabel: 'Organisation Unit Distribution Report',
        homeAction: 'Get Report',
        header: 'Organisation Unit Distribution Report',
        description: 'Browse the organisation unit distribution report based on the organisation unit group sets' +
        ' and its groups.',
    },
    dataApproval: {
        homeLabel: 'Data Approval',
        homeAction: 'View Data Values',
        header: 'Data Approval',
        description: 'View data and manage data approval by approving or unapproving, accepting or unaccepting data.',
    },
    messages: {
        loading: 'Loading...',
        reportGenerated: 'Report generated',
        unexpectedError: 'Unexpected Error',
    },
    d2UiComponents: {
        app_search_placeholder: 'Search',
        display_name: 'Name',
        // Context Menu
        actions: 'Actions',
        createReport: 'Create',
        editReport: 'Edit Report',
        sharingSettings: 'Sharing Settings',
        delete: 'Delete',
        showDetails: 'Show Details',
        // Sharing Settings
        add_users_and_user_groups: 'Add users and user groups',
        enter_names: 'Enter names',
        share: 'Sharing settings',
        metadata: 'Permissions',
        created_by: 'Created By',
        who_has_access: 'Who has access',
        external_access: 'External access (without login)',
        can_edit_and_view: 'Can edit and view',
        can_view: 'Can view',
        can_view_only: 'Can view only',
        no_access: 'No access',
        public_access: 'Public access (with login)',
        public_can_edit: 'Public can edit',
        public_can_view: 'Public can view',
        anyone_can_find_view_and_edit: 'Public can find, view and edit',
        // Buttons
        close: 'Close',
        week: 'week',
        month: 'month',
        year: 'year',
        biMonth: 'bi monthly',
        day: 'day',
        jan: 'jan',
        feb: 'feb',
        mar: 'mar',
        apr: 'apr',
        may: 'may',
        jun: 'jun',
        jul: 'jul',
        aug: 'aug',
        sep: 'sep',
        oct: 'oct',
        nov: 'nov',
        dec: 'dec',
        janFeb: 'jan-feb',
        marApr: 'mar-apr',
        mayJun: 'may-jun',
        julAug: 'jul-aug',
        sepOct: 'sep-oct',
        novDec: 'nov-dec',
        quarter: 'quarter',
        Q1: 'Q1',
        Q2: 'Q2',
        Q3: 'Q3',
        Q4: 'Q4',
        sixMonth: 'six monthly',
        janJun: 'jan-jun',
        julDec: 'jul-dec',
        aprSep: 'apr-sep',
        octMar: 'oct-mar',
    },
};

export default i18nKeys;
