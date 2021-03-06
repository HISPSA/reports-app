const { expect } = require('chai')
const { defineSupportCode } = require('cucumber')
const path = require('path')

const standardReport = require('../pages/standardReport.page')

const DEFAULT_WAIT_TIME = 5000

const fsExtra = require('fs-extra')

const fs = require('fs')

const pathToChromeDownloads = './chromeDownloads'

defineSupportCode(({ Given, When, Then }) => {
    let numberOfItems
    let fullDownloadReportFilePath
    let selectedReportName
    const editReportNameTimestamp = new Date().getTime()

    // *********************************************************
    // Shared
    // *********************************************************
    When(/^I open Standard Report page$/, () => {
        standardReport.open()
    })

    Then(/^I click more options icon in the reports list item$/, () => {
        browser.element('.d2-ui-table').waitForVisible(DEFAULT_WAIT_TIME)
        selectedReportName = standardReport.getNameOfReportFromList(0)
        standardReport.getContextMenuBtnForReportFromList(0).click()
        browser.pause(DEFAULT_WAIT_TIME)
    })

    Then(/^fill the get report form options$/, () => {
        browser.waitForVisible('#create-std-report-form-id')
        standardReport.getOneOrgUnitTreeFromTreeByIndex(1).click()
    })

    Then(/^I select option to create report$/, () => {
        browser
            .element('.d2-ui-table__context-menu')
            .waitForVisible(DEFAULT_WAIT_TIME)
        browser
            .element('.d2-ui-table__context-menu :nth-child(1) > span')
            .click()
    })

    Then(/^click save$/, () => {
        numberOfItems = browser
            .element('.data-table-pager > ul > li')
            .getText()
            .split('/')[1]
        browser.pause(DEFAULT_WAIT_TIME)
        browser.element('#save-action-btn-id').click()
        browser.pause(DEFAULT_WAIT_TIME)
    })

    Then(/^I select option to configure share settings$/, () => {
        browser
            .element('.d2-ui-table__context-menu :nth-child(3) > span')
            .waitForVisible(DEFAULT_WAIT_TIME)
        browser
            .element('.d2-ui-table__context-menu :nth-child(3) > span')
            .click()
    })

    Then(/^I click more options icon on the report I want to edit$/, () => {
        browser.element('.d2-ui-table').waitForVisible(DEFAULT_WAIT_TIME)
        standardReport.getContextMenuBtnForReportFromList(2).click()
    })

    // *********************************************************
    // Scenario: I want to see all items in the page
    // *********************************************************

    // Global Shared: a pagination component is displayed

    // Global Shared: a search field is displayed

    Then(/^a table with list of reports is displayed$/, () => {
        browser.element('.d2-ui-table').waitForVisible(DEFAULT_WAIT_TIME)
        // Later we are going to download this report - used to assert downloaded file name
        let firstStdReportName = browser
            .elements('.d2-ui-table__rows__row')
            .value[0].element(':first-child')
            .getText()
        // Match filename with the one generated by server
        firstStdReportName = firstStdReportName.replace(/[/?%*:|"'<>.]/g, '')
        fullDownloadReportFilePath = `${pathToChromeDownloads}/${firstStdReportName}.xls`
    })

    // Global Shared: each item of the list contains more options icon

    Then(/^button to add report is displayed$/, () => {
        browser
            .element('#add-std-report-btn-container-id')
            .waitForVisible(DEFAULT_WAIT_TIME)
    })

    // *********************************************************
    // Scenario: I want to add a standart report
    // *********************************************************
    Then(/^I click add button$/, () => {
        browser
            .element('#add-std-report-btn-container-id button')
            .waitForVisible(DEFAULT_WAIT_TIME)
        browser.element('#add-std-report-btn-container-id button').click()
        browser
            .element('#add-edit-std-report-form-id')
            .waitForVisible(DEFAULT_WAIT_TIME)
    })

    Then(/^I fill the form$/, () => {
        const filePath = path.join(
            __dirname,
            '..',
            'files',
            'jasper-report-template.jrxml'
        )
        browser
            .element('#add-edit-std-report-form-id .d2-ui-textfield input')
            .setValue('Standard Report Name')
        browser.chooseFile('input[name=hiddenInputFile]', filePath)
        browser.element('.d2-ui-selectfield-reportTable button').click()
        browser.element('div[role=menu]').waitForVisible(DEFAULT_WAIT_TIME)
        browser.element('div[role=menu] :nth-child(2)').click()
    })

    // Shared: click save

    Then(/^a new standard report was created$/, () => {
        const newNumberOfItems = browser
            .element('.data-table-pager > ul > li')
            .getText()
            .split('/')[1]
        expect(parseInt(newNumberOfItems, 10)).to.equal(
            parseInt(numberOfItems, 10) + 1
        )
    })

    // *********************************************************
    // Scenario: I want see available options for report
    // *********************************************************

    // Shared: I click more options icon in the reports list item

    Then(/^a list with several options is displayed$/, () => {
        browser
            .element('.d2-ui-table__context-menu')
            .waitForVisible(DEFAULT_WAIT_TIME)
    })

    Then(/^there is an option to create report$/, () => {
        expect(
            browser
                .element(
                    '.d2-ui-table__context-menu :nth-child(1) > span > div > div > div'
                )
                .getText()
        ).to.equal('Create')
    })

    Then(/^there is an option to edit report$/, () => {
        expect(
            browser
                .element(
                    '.d2-ui-table__context-menu :nth-child(2) > span > div > div > div'
                )
                .getText()
        ).to.equal('Edit')
    })

    Then(/^there is an option to configure share settings$/, () => {
        expect(
            browser
                .element(
                    '.d2-ui-table__context-menu :nth-child(3) > span > div > div > div'
                )
                .getText()
        ).to.equal('Sharing settings')
    })

    Then(/^there is an option to delete the standard report$/, () => {
        expect(
            browser
                .element(
                    '.d2-ui-table__context-menu :nth-child(4) > span > div > div > div'
                )
                .getText()
        ).to.equal('Delete')
    })

    // *********************************************************
    // Scenario: I want to get a report
    // *********************************************************

    // Shared: I click more options icon in the reports list item

    // Shared: I select option to create report

    // Shared: fill the get report form options

    Then(/^I click get report button$/, () => {
        this.tabsCount = browser.getTabIds().length
        browser.waitForEnabled('#create-std-report-get-action-id')
        browser.element('#create-std-report-get-action-id').click()
    })

    Then(/^report is generated$/, () => {
        expect(browser.getTabIds().length).to.equal(this.tabsCount + 1)
        // Switch to first open tab soo tests can continue
        browser.switchTab()
        browser.pause(DEFAULT_WAIT_TIME)
    })

    // *********************************************************
    // Scenario: I want to download a report
    // *********************************************************

    // Shared: I click more options icon in the reports list item

    // Shared: I select option to create report

    // Shared: fill the get report form options

    Then(/^I click download as excel button$/, () => {
        // Clean up the chromeDownloads folder and create a fresh one
        fsExtra.removeSync(pathToChromeDownloads)
        fsExtra.mkdirsSync(pathToChromeDownloads)
        expect(fs.existsSync(fullDownloadReportFilePath)).to.equal(false)
        browser.waitForEnabled('#create-std-report-export-action-id')
        browser
            .element('#create-std-report-export-action-id')
            .element('<button>')
            .click()
    })

    Then(/^report is downloaded/, () => {
        browser.pause(DEFAULT_WAIT_TIME)
        expect(fs.existsSync(fullDownloadReportFilePath)).to.equal(true)
    })

    // *********************************************************
    // Scenario: I want to abort the generation of a report
    // *********************************************************

    // Shared: I click more options icon in the reports list item

    // Shared: I select option to create report

    // Shared: fill the get report form options

    Then(/^I click cancel button$/, () => {
        this.tabsCount = browser.getTabIds().length
        browser.waitForEnabled('#create-std-report-cancel-action-id')
        browser.element('#create-std-report-cancel-action-id').click()
    })

    Then(/^the report was not generated$/, () => {
        expect(this.tabsCount).to.equal(browser.getTabIds().length)
    })

    Then(/^create report form is dismissed$/, () => {
        browser.pause(DEFAULT_WAIT_TIME)
        expect(
            browser.element('#create-std-report-form-id').isVisible()
        ).to.equal(false)
    })

    // *********************************************************
    // Scenario: I want to edit a report
    // *********************************************************

    // Shared: I click more options icon on the report I want to edit

    Then(/^I select option to edit report$/, () => {
        browser
            .element('.d2-ui-table__context-menu')
            .waitForVisible(DEFAULT_WAIT_TIME)
        browser
            .element('.d2-ui-table__context-menu :nth-child(2) > span')
            .click()
    })

    Then(/^I update report name$/, () => {
        browser.waitForVisible('#add-edit-std-report-form-id')
        browser
            .element('#add-edit-std-report-form-id .d2-ui-textfield input')
            .setValue(
                `${'ANC: Overview Report' +
                    ' (HTML-based)_'}${editReportNameTimestamp}`
            )
    })

    // Shared: click save

    Then(/^the standart report is updated$/, () => {
        expect(
            browser
                .element('.d2-ui-table')
                .elements('.d2-ui-table__rows__row')
                .value[2].element('<div>')
                .getText()
        ).to.equal(
            `ANC: Overview Report (HTML-based)_${editReportNameTimestamp}`
        )
    })

    // *********************************************************
    // Scenario: I want to see configure share settings of report form
    // *********************************************************

    // Shared: I click more options icon on the report I want to edit

    // Shared: I select option to configure share settings

    Then(/^form with selected report name is displayed$/, () => {
        browser
            .element('div[class^="MuiModal"]')
            .waitForExist(DEFAULT_WAIT_TIME)
        browser
            .element('div[class^="MuiDialogTitle"]')
            .waitForExist(DEFAULT_WAIT_TIME)
        expect(
            browser.element('div[class^="MuiDialogTitle"]').getText()
        ).to.equal('Sharing settings')
        expect(
            browser
                .element('div[class^="MuiDialogContent"] > div > h2')
                .getText()
        ).to.equal(selectedReportName)
    })

    // *********************************************************
    // Scenario: I want to configure share settings of report
    // *********************************************************

    // Shared: I click more options icon on the report I want to edit

    // Shared: I select option to configure share settings

    Then(/^I change share options$/, () => {
        // nth-child(6) 6 - "rules list" once (1-title, 2-created by, 3-"div space", 4-label, 5-hr... )
        this.existingRules = browser.elements(
            'div[class^="MuiDialogContent"] > div :nth-child(6) > div'
        ).value.length
        this.existingRules = standardReport.processAccessRulesNumber(
            this.existingRules
        )
        if (this.existingRules > 3) {
            this.action = 'DELETE'
            browser
                .elements(
                    'div[class^="MuiDialogContent"] > div :nth-child(6) :nth-child(6) button'
                )
                .value[1].click()
        } else {
            this.action = 'ADD'
            browser.element('#user-autocomplete-input').setValue('Jo')
            browser
                .element('div[role=tooltip]')
                .waitForVisible(DEFAULT_WAIT_TIME)
            browser.element('div[role=tooltip] :nth-child(1)').click()
        }
    })

    Then(/^share settings of report where updated$/, () => {
        browser.pause(DEFAULT_WAIT_TIME)
        const newRules = standardReport.processAccessRulesNumber(
            browser.elements(
                'div[class^="MuiDialogContent"] > div :nth-child(6) > div'
            ).value.length
        )
        if (this.action === 'DELETE') {
            expect(newRules).to.equal(this.existingRules - 1)
        } else {
            expect(newRules).to.equal(this.existingRules + 1)
        }
    })

    // *********************************************************
    // Scenario: I want to delete a standart report
    // *********************************************************

    Then(/^I click more options icon on the report I want to delete$/, () => {
        browser.element('.d2-ui-table').waitForVisible(DEFAULT_WAIT_TIME)
        this.oldVisibleReports = browser
            .element('.d2-ui-table')
            .elements('.d2-ui-table__rows__row').value.length
        standardReport
            .getContextMenuBtnForReportFromList(this.oldVisibleReports - 1)
            .click()
    })

    Then(/^I select option to delete report$/, () => {
        browser
            .element('.d2-ui-table__context-menu')
            .waitForVisible(DEFAULT_WAIT_TIME)
        browser
            .element('.d2-ui-table__context-menu :nth-child(4) > span')
            .click()
    })

    // Global Shared: confirm the deletion

    Then(/^the standard report is removed form standard report list$/, () => {
        browser.pause(DEFAULT_WAIT_TIME)
        const newVisibleReports = browser
            .element('.d2-ui-table')
            .elements('.d2-ui-table__rows__row').value.length
        expect(newVisibleReports).to.equal(this.oldVisibleReports - 1)
    })
})
