/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';

import OrganisationUnitDistributionReport from './OrganisationUnitDistributionReport';

import fakerData from '../../helpers/fakerTests';

import {
    sections,
    ORGANISATION_UNIT_DISTRIBUTION_REPORT_SECTION_KEY
} from '../sections.conf';

let pageInfo = {};
for(let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (section.key === ORGANISATION_UNIT_DISTRIBUTION_REPORT_SECTION_KEY) {
        pageInfo = section.info;
        break;
    }
}

jest.mock('@dhis2/d2-ui-org-unit-tree', () => ({
    OrgUnitTree: ('OrgUnitTree'),
}));

const ownShallow = () => {
    return shallow(
        <OrganisationUnitDistributionReport
            sectionKey={ORGANISATION_UNIT_DISTRIBUTION_REPORT_SECTION_KEY}
            pageInfo={pageInfo}
            updateAppState={jest.fn()}
            currentSection={ORGANISATION_UNIT_DISTRIBUTION_REPORT_SECTION_KEY}
            d2={fakerData.d2}
        />,
        {
            disableLifecycleMethods: true
        }
    );
};

/* Mocks */
jest.mock('@dhis2/d2-ui-org-unit-tree', () => ('OrgUnitTree'));

describe('Test <OrganisationUnitDistributionReport /> rendering:', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = ownShallow();
    });

    it('renders without crashing', () => {
        ownShallow();
    });
});
