# tissue_biorespository
database and application for managing inventory of plant tissue samples with associated voucher metadata from GBIF  
This applicaiton allows the user to upload a csv containing unique identifiers for tissue samples (materialSampleID), unique identifiers for associated voucher specimens (occurrenceID), and additional metadata as necessary. The applicaiton will then query the GBIF API for the associated voucher, based on the occurrenceID, and populate the local database with up to date metadata. A user can also upload all appropriate metadata via csv, when no voucher data is available on GBIF.  

User can query and download data appropriate for tissue sample labels, download data in Darwin Core format, as well as update the availability of remaining material.

