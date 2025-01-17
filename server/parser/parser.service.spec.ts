import { Test, TestingModule } from '@nestjs/testing'
import { ParserService } from "./parser.service";
import * as fs from "fs";

describe('ParserService', () => {
    let parserService : ParserService
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ParserService,
            ],
        }).compile()
        parserService = module.get<ParserService>(ParserService)
    })

    describe("parse()", () => {
        it("Claim is parsed correctly", async () => {
            const claimText =
                "Pellentesque auctor neque nec urna. Nulla facilisi. Praesent nec nisl a purus blandit viverra." +
                "\n\nNam at tortor in tellus interdum sagittis. Ut leo. Praesent adipiscing. Curabitur nisi.";
            const parseOutput = parserService.parse(claimText);
            const paragraphs = parseOutput.object;
            expect(Array.isArray(paragraphs)).toBe(true);
            expect(paragraphs.length).toEqual(2);
            expect(paragraphs[0].content.length).toEqual(3);
            expect(paragraphs[1].content.length).toEqual(4);
        });

        it("Music structure should not fail", async () => {
            const claimText = fs.readFileSync(
                `${__dirname}/test-fixtures/claim_music.txt`,
                "utf-8"
            );
            const parseOutput = parserService.parse(claimText);
            const paragraphs = parseOutput.object;
            const sentences = paragraphs[0].content;
            expect(paragraphs.length).toEqual(1);
            expect(sentences.length).toEqual(46);
        });

        it("parsed object conforms to schema", async () => {
            const claimText = "Nulla facilisi.\n\nUt leo.";
            const parseOutput = parserService.parse(claimText);
            expect(Object.keys(parseOutput)).toEqual(["object", "text"]);
        });

        it("Ph.D word is not confused with end of sentence", async () => {
            const claimText = "Jose is Ph.D. and Maria is a Ph.D.";
            const parseOutput = parserService.parse(claimText);
            const paragraphs = parseOutput.object;
            expect(paragraphs.length).toEqual( 1);
            expect(paragraphs[0].content.length).toEqual( 1);
        });

        it("Prefixes are not confused with end of sentence", async () => {
            const claimText =
                "Mr. Jose and Mrs. Maria lives in St. Monica with Ms. Butterfly their Dr. of the year";
            const parseOutput = parserService.parse(claimText);
            const paragraphs = parseOutput.object;
            expect(paragraphs.length).toEqual( 1);
            expect(paragraphs[0].content.length).toEqual( 1);
        });
    });
})
