/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/crud.json`.
 */
export type Crud = {
  "address": "DRXTDUDDPjujawEz11rS8oqUrxutcgs6DpVg8FFiXasH",
  "metadata": {
    "name": "crud",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "createTweet",
      "discriminator": [
        240,
        129,
        89,
        200,
        95,
        152,
        63,
        70
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "tweet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "title"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "message",
          "type": "string"
        }
      ]
    },
    {
      "name": "deleteTweet",
      "discriminator": [
        58,
        240,
        206,
        92,
        160,
        186,
        211,
        87
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "tweet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "title"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "title",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateTweet",
      "discriminator": [
        244,
        144,
        101,
        90,
        185,
        30,
        89,
        242
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "tweet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "title"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "message",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "tweet",
      "discriminator": [
        229,
        13,
        110,
        58,
        118,
        6,
        20,
        79
      ]
    }
  ],
  "types": [
    {
      "name": "tweet",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "message",
            "type": "string"
          },
          {
            "name": "owner",
            "type": "pubkey"
          }
        ]
      }
    }
  ]
};
