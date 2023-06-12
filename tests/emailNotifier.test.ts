import {Note} from "../src/Note";
import {emailNotifier} from "../src/EmailNotifier";

const createHappyBirthdayNoteMock = jest.fn().mockReturnValue(new Note("Doe"));
const NoteGeneratorMock = jest.fn().mockImplementation(() => ({
    createHappyBirthdayNote: createHappyBirthdayNoteMock
}));

describe("Email notifier", () => {
    it("should notify", () => {
        const friendEmail = "john.doe@foobar.com";
        const noteGeneratorMock = new NoteGeneratorMock();
        const note = noteGeneratorMock.createHappyBirthdayNote();
        const response: boolean = emailNotifier.notify(note, friendEmail);

        expect(response).toBe(true);
    });
});