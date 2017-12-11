import client from "../../Apollo";

import {
  writeFile,
  readFile,
  getMockDataPath
} from "../../Apollo/mock.helpers";

import { getPokemon } from "../query";

let mockDataPath = getMockDataPath(__dirname, "getPokemon");

import * as mockVars from "../__mock_vars__";

it("can rebuild mocked data for tests when necessary", async () => {
  try {
    let snap = await readFile(mockDataPath);
  } catch (e) {
    let result = await client.query({
      query: getPokemon,
      variables: mockVars.getPokemon
    });
    let success = await writeFile(
      mockDataPath,
      JSON.stringify(result, null, 2)
    );
  }
});
