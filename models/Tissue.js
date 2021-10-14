module.exports = (sequelize, Sequelize) => {
    const Tissue = sequelize.define("Tissue", {
        materialSampleID : Sequelize.STRING,
        occurrenceID : Sequelize.STRING,
        institutionCode : Sequelize.STRING,
        collectionCode : Sequelize.STRING,
        catalogNumber : Sequelize.STRING,
        sampleCatalogNumber : Sequelize.STRING,
        recordedBy : Sequelize.STRING,
        recordNumber : Sequelize.STRING,
        eventDate : Sequelize.STRING,
        country : Sequelize.STRING,
        stateProvince : Sequelize.STRING,
        county : Sequelize.STRING,
        locality : Sequelize.STRING,
        decimalLatitude : Sequelize.STRING,
        decimalLongitude : Sequelize.STRING,
        minimumElevationInMeters : Sequelize.STRING,
        family : Sequelize.STRING,
        genus : Sequelize.STRING,
        specificEpithet : Sequelize.STRING,
        infraspecificEpithet : Sequelize.STRING,
        taxonRank : Sequelize.STRING,
        scientificName : Sequelize.STRING,
        user: Sequelize.STRING
    });

    return Tissue;
};