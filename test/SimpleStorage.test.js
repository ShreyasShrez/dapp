const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", () => {
    it("should store the value 89.", async () => {
        const simpleStorageInstance = await SimpleStorage.deployed();

        // Set value
        await simpleStorageInstance.set(89);

        // Get stored value
        const storedData = await simpleStorageInstance.get();

        assert.equal(storedData.toString(), '89', "The value 89 was not stored.");
    });
});
