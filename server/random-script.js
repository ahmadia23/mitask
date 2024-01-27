const CompanyMdm = require("../models/CompanyMdm");
const DeviceMdm = require("../models/DeviceMdm");
const Company = require("../models/Company");
const Device = require("../models/Device");
const Integration = require("../models/Integration");

const migrateCompaniesMdm = async () => {
  console.info("Fetching companies with MDM activated...");
  const vmwareIntegrations = await Integration.query().where({
    provider: "VMWARE",
    status: "ACTIVE",
  });

  console.info(
    `Found ${vmwareIntegrations.length} companies with MDM enabled.`
  );

  for (const vmwareIntegration of vmwareIntegrations) {
    const company = await Company.query().findById(
      vmwareIntegration.company_id
    );
    const companyMdm = await CompanyMdm.query().insertAndFetch({
      company_id: company.id,
      abm_id: company.abm_id,
      vmware_group_id: vmwareIntegration.external_company_id,
      activated_by: vmwareIntegration.activated_by,
    });

    console.info(
      `Successfully inserted companyMdm for company with ID: ${company.id}`
    );

    const devices = await Device.query().where({
      company_id: company.id,
      deleted: false,
    });
    for (const device of devices) {
      if (device.asked_for_vmware || device.vmware_device_id) {
        await DeviceMdm.query().insert({
          device_id: device.id,
          company_mdm_id: companyMdm.id,
          vmware_device_id: device.vmware_device_id,
          enrollment_date: new Date(),
        });

        console.info(
          `Successfully inserted deviceMdm for device with ID: ${device.id} from company with ID: ${company.id}`
        );
      }
    }
  }
};

console.info("Starting migration of mdm...");
migrateCompaniesMdm()
  .then(() => {
    console.info("Successfully completed the migration of mdm.");
    process.exit();
  })
  .catch((error) => {
    console.error("An error occurred during the migration of mdm.", error);
    process.exit();
  });
