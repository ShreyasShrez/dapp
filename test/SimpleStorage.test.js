const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function (deployer) {
    deployer.deploy(SimpleStorage);
};


contract("SimpleStorage", () => {
    let simpleStorageInstance;

    before(async () => {
        // Deploy the contract instance before tests
        simpleStorageInstance = await SimpleStorage.deployed();
    });

    it("should store the value 89.", async () => {
        // Set value
        await simpleStorageInstance.set(89);

        // Get stored value
        const storedData = await simpleStorageInstance.get();

        assert.equal(storedData.toString(), '89', "The value 89 was not stored.");
    });
});
