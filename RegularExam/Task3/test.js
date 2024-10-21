const chai = await import("chai");
const expect = chai.expect;
import streamingServiceSelector from "./streamingServiceSelector.js";

describe("Tests for streamingServiceSelector", function () {
  describe("testing selectingContent", function () {
    it("should throw an error if genre is not in the supported list", function () {
      expect(function () {
        streamingServiceSelector.selectingContent(
          "TV Show",
          "Netflix",
          "Cartoon"
        );
      }).to.throw(
        "We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi."
      );
    });

    it("should throw an error if type is not supported", function () {
      expect(function () {
        streamingServiceSelector.selectingContent(
          "TV Series",
          "Netflix",
          "Action"
        );
      }).to.throw("We currently only support 'Movie' or 'TV Show' types.");
    });

    it("return the correct string if input is valid", function () {
      const res = streamingServiceSelector.selectingContent(
        "TV Show",
        "Netflix",
        "Action"
      );
      expect(res).to.equal(
        "You can watch this Action TV Show on Netflix. Enjoy your Action-filled experience!"
      );
    });
  });

  describe("testing availablePlatforms", function () {
    it("should throw an error if platforms is not an array", function () {
      expect(function () {
        streamingServiceSelector.availablePlatforms("invalid", 0);
      }).to.throw("Invalid platform selection.");
    });

    it("should throw an error if selectedPlatformIndex is not valid", function () {
      expect(function () {
        streamingServiceSelector.availablePlatforms(["Netflix"], -1);
      }).to.throw("Invalid platform selection.");
    });

    it("should return the correct string if input is valid", function () {
      const res = streamingServiceSelector.availablePlatforms(
        ["Netflix", "HBO", "Disney+"],
        1
      );
      expect(res).to.equal("Other available platforms are: Netflix, Disney+.");
    });
  });

  describe("testing contentRating", function () {
    it("should throw an error if runtimeInMinutes is not a number", function () {
      expect(function () {
        streamingServiceSelector.contentRating("string", 7);
      }).to.throw("Invalid runtime or rating.");
    });

    it("should throw an error if runtimeInMinutes is a negative number", function () {
      expect(function () {
        const res = streamingServiceSelector.contentRating(-1, 7);
      }).to.throw("Invalid runtime or rating.");
    });

    it("should throw an error if viewerRating is not a number", function () {
      expect(function () {
        const res = streamingServiceSelector.contentRating(60, "string");
      }).to.throw("Invalid runtime or rating.");
    });

    it("should throw an error if viewerRating is not in range in the correct range of 0-10", function () {
      expect(function () {
        const res = streamingServiceSelector.contentRating(60, 11);
      }).to.throw("Invalid runtime or rating.");
    });

    it("should return a correct response if input is valid and viewerRating is higher than or equal to 7", function () {
      const res = streamingServiceSelector.contentRating(60, 7);
      expect(res).to.equal(
        "This content is highly rated (7/10) and has a runtime of 1.00 hours. Enjoy your watch!"
      );
    });

    it("should return a correct response if input is valid and viewerRating is lower than or equal to 6", function () {
      const res = streamingServiceSelector.contentRating(60, 6);
      expect(res).to.equal(
        "This content has a lower rating (6/10) and runs for 1.00 hours. You might want to check reviews first."
      );
    });
  });
  // TODO: …
});
