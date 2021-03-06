(this["webpackJsonpbnx-mark"] = this["webpackJsonpbnx-mark"] || []).push([[0], {
    159: function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"_baseUri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_addr","type":"address"},{"indexed":false,"internalType":"bool","name":"_access","type":"bool"}],"name":"AccessAllowed","type":"event","signature":"0xdaa6f74aee7ee67b019171c24fdcfc6d981c279df198c623367e87dd8dce375e"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event","signature":"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"baseUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x9abc8320"},{"inputs":[{"internalType":"uint256","name":"_playerId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x42966c68"},{"inputs":[{"internalType":"address","name":"player","type":"address"}],"name":"createPlayer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function","signature":"0xe8ace5d7"},{"inputs":[{"internalType":"uint256","name":"_playerId","type":"uint256"}],"name":"exist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4ebbc92a"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x081812fc"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"grantAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x0ae5e739"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"hasAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95a078e8"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe985e9c5"},{"inputs":[{"internalType":"uint256","name":"_playerId","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"isApprovedOrOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf6c4c9c1"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0x150b7a02"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6352211e"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"revokeAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x85e68531"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x42842e0e"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb88d4fde"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa22cb465"},{"inputs":[{"internalType":"string","name":"uri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa0bcfc7f"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x01ffc9a7"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4f6ccce7"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x2f745c59"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xc87b56dd"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}]')
    }, 355: function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_coinAddr","type":"address"},{"internalType":"address","name":"_playerInfoAddr","type":"address"},{"internalType":"address","name":"linggong","type":"address"},{"internalType":"address","name":"datie","type":"address"},{"internalType":"address","name":"bulie","type":"address"},{"internalType":"address","name":"tushu","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_addr","type":"address"},{"indexed":false,"internalType":"bool","name":"_access","type":"bool"}],"name":"AccessAllowed","type":"event","signature":"0xdaa6f74aee7ee67b019171c24fdcfc6d981c279df198c623367e87dd8dce375e"},{"inputs":[{"internalType":"address","name":"workType","type":"address"}],"name":"addWork","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2f0dca8e"},{"inputs":[{"internalType":"address","name":"workType","type":"address"}],"name":"delWork","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x3920257a"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getAward","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x05989e9d"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"workType","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"income","type":"uint256"}],"name":"GetAward","type":"event","signature":"0xfd5cdc0d4f7f1700cae56db0b1085b93b5128e5f6049319bdeadf08b30d53c59"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"grantAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x0ae5e739"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0x150b7a02"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"quitWork","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x733593d2"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"workType","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"QuitWork","type":"event","signature":"0x5514c8661203d5dd0ff658ba1102a824e04c0fd2ed82a2b0fdef0ac02dfb5b65"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"revokeAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x85e68531"},{"inputs":[{"internalType":"address","name":"_coinAddr","type":"address"}],"name":"setCoinAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x406444db"},{"inputs":[{"internalType":"address","name":"_playerInfoAddr","type":"address"}],"name":"setPlayerInfoAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xdb53552b"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[{"internalType":"address","name":"workType","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"work","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x25b6488b"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"workType","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"}],"name":"Work","type":"event","signature":"0x05d28bd94112a2b7aaf493c272597e6cb99769f6a589a1b934db90a7ad5ba025"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"coinAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf5aa3420"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getAwardInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa88c989a"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getPlayerWork","outputs":[{"components":[{"internalType":"address","name":"workType","type":"address"},{"internalType":"address","name":"careerAddr","type":"address"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256[]","name":"blocks","type":"uint256[]"}],"internalType":"struct Mining.PlayerWork","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xdd2abe50"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getWorkType","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf45567f7"},{"inputs":[],"name":"getWorkTypeLen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4a19a9ea"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"hasAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95a078e8"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6352211e"},{"inputs":[],"name":"playerInfoAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8115ad5d"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x2f745c59"}]')
    }, 356: function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_coinAddr","type":"address"},{"internalType":"address","name":"_playerInfoAddr","type":"address"},{"internalType":"address","name":"blacksmith","type":"address"},{"internalType":"address","name":"hunter","type":"address"},{"internalType":"address","name":"bookmanger","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_addr","type":"address"},{"indexed":false,"internalType":"bool","name":"_access","type":"bool"}],"name":"AccessAllowed","type":"event","signature":"0xdaa6f74aee7ee67b019171c24fdcfc6d981c279df198c623367e87dd8dce375e"},{"inputs":[{"internalType":"address","name":"workType","type":"address"}],"name":"addWork","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2f0dca8e"},{"inputs":[{"internalType":"uint256[]","name":"tokenId","type":"uint256[]"}],"name":"batchGetAward","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc0ecc402"},{"inputs":[{"internalType":"uint256[]","name":"tokenId","type":"uint256[]"}],"name":"batchQuitWork","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x3495e15b"},{"inputs":[{"internalType":"address[]","name":"workType","type":"address[]"},{"internalType":"uint256[]","name":"tokenId","type":"uint256[]"}],"name":"batchWork","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x403ce9a1"},{"inputs":[{"internalType":"address","name":"workType","type":"address"}],"name":"delWork","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x3920257a"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getAward","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x05989e9d"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"workType","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"income","type":"uint256"}],"name":"GetAward","type":"event","signature":"0xfd5cdc0d4f7f1700cae56db0b1085b93b5128e5f6049319bdeadf08b30d53c59"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"bnxAmount","type":"uint256"},{"internalType":"uint256","name":"endnum","type":"uint256"}],"name":"getAwardByGo","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x1d41f459"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"grantAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x0ae5e739"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","signature":"0x150b7a02"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"quitWork","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x733593d2"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"workType","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"num","type":"uint256"}],"name":"QuitWork","type":"event","signature":"0x4cdaceaae831f9d577319820623248aee2c0e3959443274a726db293c978efad"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"bnxAmount","type":"uint256"},{"internalType":"uint256","name":"endnum","type":"uint256"}],"name":"quitWorkByGo","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x575503ce"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"revokeAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x85e68531"},{"inputs":[{"internalType":"address","name":"_bnxAddr","type":"address"}],"name":"setBnxAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2b87a67e"},{"inputs":[{"internalType":"address","name":"_coinAddr","type":"address"}],"name":"setCoinAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x406444db"},{"inputs":[{"internalType":"address","name":"_playerInfoAddr","type":"address"}],"name":"setPlayerInfoAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xdb53552b"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[{"internalType":"address","name":"workType","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"work","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x25b6488b"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"workType","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"num","type":"uint256"}],"name":"Work","type":"event","signature":"0xc8fbc4cce7d38b6cf3d397ddf4973102bbd63c1dfb1472b18d8d257fc458275e"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"bnxAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xb8e3bf64"},{"inputs":[],"name":"coinAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf5aa3420"},{"inputs":[{"internalType":"uint256[]","name":"tokenId","type":"uint256[]"}],"name":"getAllAwardInfos","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8ac4641b"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getAwardInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa88c989a"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getPlayerWork","outputs":[{"components":[{"internalType":"address","name":"workType","type":"address"},{"internalType":"address","name":"careerAddr","type":"address"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256[]","name":"blocks","type":"uint256[]"}],"internalType":"struct Mining.PlayerWork","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xdd2abe50"},{"inputs":[{"internalType":"address","name":"workType","type":"address"}],"name":"getWorkTokenLen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x5320a3d1"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getWorkType","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf45567f7"},{"inputs":[],"name":"getWorkTypeLen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4a19a9ea"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"hasAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95a078e8"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6352211e"},{"inputs":[],"name":"playerInfoAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8115ad5d"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x2f745c59"}]')
    }, 357: function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_addr","type":"address"},{"indexed":false,"internalType":"bool","name":"_access","type":"bool"}],"name":"AccessAllowed","type":"event","signature":"0xdaa6f74aee7ee67b019171c24fdcfc6d981c279df198c623367e87dd8dce375e"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"inputs":[{"internalType":"uint256[]","name":"playerInfo","type":"uint256[]"},{"internalType":"address","name":"career","type":"address"}],"name":"Condition","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xae2e4447"},{"inputs":[],"name":"baseNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x77513c72"},{"inputs":[],"name":"block1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0eb524d4"},{"inputs":[],"name":"block2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa58c30c5"},{"inputs":[],"name":"block3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x705a3644"},{"inputs":[],"name":"diffNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd3220731"},{"inputs":[{"internalType":"uint256[]","name":"playerInfo","type":"uint256[]"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"}],"name":"getIncome","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe26a5e43"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"grantAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x0ae5e739"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"hasAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95a078e8"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"need","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xeadfe33b"},{"inputs":[],"name":"need2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf0de2a50"},{"inputs":[],"name":"needParam","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd772c5a9"},{"inputs":[],"name":"needPlayerAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe955eaa5"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"rate1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xcf854969"},{"inputs":[],"name":"rate2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf555b815"},{"inputs":[],"name":"rate3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xaff1f15f"},{"inputs":[],"name":"rate4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x5dd8eb50"},{"inputs":[],"name":"rateBase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x014e95ba"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rateParams","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7a47a426"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"revokeAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x85e68531"},{"inputs":[{"internalType":"uint256","name":"_baseNum","type":"uint256"}],"name":"setBaseNum","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa5b67e75"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setBlock1","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x8d23f384"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setBlock2","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5598ae15"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setBlock3","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x159bdf31"},{"inputs":[{"internalType":"uint256","name":"_diffNum","type":"uint256"}],"name":"setDiffNum","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf5c3cd9d"},{"inputs":[{"internalType":"uint256","name":"_need","type":"uint256"}],"name":"setNeed","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5fbd6551"},{"inputs":[{"internalType":"uint256","name":"_need2","type":"uint256"}],"name":"setNeed2","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb6bede83"},{"inputs":[{"internalType":"uint256","name":"_needParam","type":"uint256"}],"name":"setNeedParam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x91727816"},{"inputs":[{"internalType":"address","name":"_needPlayerAddr","type":"address"}],"name":"setNeedPlayerAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa8cad06d"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate1","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb86b14cd"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate2","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x79e32a62"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate3","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf3728b67"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate4","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x84e4191e"},{"inputs":[{"internalType":"uint256","name":"_rateBase","type":"uint256"}],"name":"setRateBase","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xaf56e167"},{"inputs":[{"internalType":"uint256[]","name":"_rateParams","type":"uint256[]"}],"name":"setRateParam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x808491af"},{"inputs":[{"internalType":"uint256","name":"_stopTime","type":"uint256"}],"name":"setStopTime","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc92501b7"},{"inputs":[],"name":"stopTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x03ff5e73"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}]')
    }, 358: function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_warrior","type":"address"},{"internalType":"address","name":"_robber","type":"address"},{"internalType":"address","name":"_mage","type":"address"},{"internalType":"address","name":"_payAddr","type":"address"},{"internalType":"address","name":"_payBnxAddr","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_addr","type":"address"},{"indexed":false,"internalType":"bool","name":"_access","type":"bool"}],"name":"AccessAllowed","type":"event","signature":"0xdaa6f74aee7ee67b019171c24fdcfc6d981c279df198c623367e87dd8dce375e"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"career","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"oldtokenId","type":"uint256"}],"name":"CopyPlayer","type":"event","signature":"0xe6643109984b4dbf268b0175517cd19bb1f7c17abf9562139298c4628d81b694"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"career","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"FailPlayer","type":"event","signature":"0xc5fd1c71a1de33bc0f5cde303aaeeee38926ad24c8fc8ca42788ee3982aca647"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"career","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"KillPlayer","type":"event","signature":"0x07fd7187518897cd9aa423812e09790dbe8ae3b179d2d2da00620e138f82c889"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"coinAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"coin","type":"uint256"},{"indexed":false,"internalType":"address","name":"paycoinAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"paycoin","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"}],"name":"LevelUp","type":"event","signature":"0x5f763ddaad97ba9bded66a0ecb8fe108e39efa0216502a2794fe7f8fb25ab80f"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"career","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bnxValue","type":"uint256"}],"name":"NewPlayer","type":"event","signature":"0x05efffd2fd1286223216a9ccbcbb6d856651316e95fa28cc7ddbedbd9fe75e26"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event","signature":"0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event","signature":"0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"CareerConfigs","outputs":[{"internalType":"uint256","name":"strengthMin","type":"uint256"},{"internalType":"uint256","name":"strengthMax","type":"uint256"},{"internalType":"uint256","name":"agilityMin","type":"uint256"},{"internalType":"uint256","name":"agilityMax","type":"uint256"},{"internalType":"uint256","name":"physiqueMin","type":"uint256"},{"internalType":"uint256","name":"physiqueMax","type":"uint256"},{"internalType":"uint256","name":"volitionMin","type":"uint256"},{"internalType":"uint256","name":"volitionMax","type":"uint256"},{"internalType":"uint256","name":"brainsMin","type":"uint256"},{"internalType":"uint256","name":"brainsMax","type":"uint256"},{"internalType":"uint256","name":"charmMin","type":"uint256"},{"internalType":"uint256","name":"charmMax","type":"uint256"},{"internalType":"uint256","name":"maxnum","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6c44d6be"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"CareerNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0297d8f9"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"accCareer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7e735ebf"},{"inputs":[{"internalType":"address","name":"career","type":"address"},{"internalType":"uint256[]","name":"configs","type":"uint256[]"}],"name":"addCareer","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x7c285c03"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"bnxValue","type":"uint256"}],"name":"batchNewPlayer","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc4b8b45c"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256[]","name":"infos","type":"uint256[]"}],"name":"changePlayer","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xe0d8eaba"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"copyIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xc23d082b"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"ownerAddress","type":"address"}],"name":"copyPlayer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function","signature":"0xfd593501"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"copyPlayerInfo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x5989981e"},{"inputs":[],"name":"defaultCareer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x50082120"},{"inputs":[],"name":"gasLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf68016b7"},{"inputs":[{"internalType":"uint256","name":"careerIndex","type":"uint256"}],"name":"getAccCareer","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xbe40c2b2"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getCareerAddrs","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf3d33aac"},{"inputs":[],"name":"getCareerAddrsLen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3035c5bc"},{"inputs":[],"name":"getCopyIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x448374c0"},{"inputs":[],"name":"getCopyIdsLen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xb689d674"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getLevelUpConfig","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xc9ec2875"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getPlayerInfoBySet","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x305041d0"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserRight","outputs":[{"internalType":"uint256[2]","name":"","type":"uint256[2]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7b12ad11"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"grantAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x0ae5e739"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"hasAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95a078e8"},{"inputs":[],"name":"intervalTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xfd3c9144"},{"inputs":[{"internalType":"address","name":"careerAddr","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"killPlayer","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xd77f91c7"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"_coin","type":"uint256"},{"internalType":"uint256","name":"_paycoin","type":"uint256"}],"name":"levelUp","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xc45a7374"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"levelUpConfig","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x9679b5ba"},{"inputs":[],"name":"maxGetNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x27b64f87"},{"inputs":[],"name":"maxLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xcc06c359"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"bnxvalue","type":"uint256"}],"name":"newPlayer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function","signature":"0xe37a7fff"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"newPlayerFree","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function","signature":"0x2fd3999c"},{"inputs":[],"name":"oldPlayInfo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xde044ef7"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x5c975abb"},{"inputs":[],"name":"payAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf9fcfe5c"},{"inputs":[],"name":"payBnxAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x543ae126"},{"inputs":[],"name":"payBnxValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6a4d832b"},{"inputs":[],"name":"payValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7649a2f2"},{"inputs":[],"name":"receiveAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3455a9db"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"revokeAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x85e68531"},{"inputs":[{"internalType":"uint256[]","name":"accParam","type":"uint256[]"},{"internalType":"uint256","name":"careerIndex","type":"uint256"}],"name":"setAccCareer","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x15eca7bf"},{"inputs":[{"internalType":"address","name":"career","type":"address"},{"internalType":"uint256[]","name":"configs","type":"uint256[]"}],"name":"setConfig","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x1a774bfb"},{"inputs":[{"internalType":"uint256","name":"_defaultCareer","type":"uint256"}],"name":"setDefaultCareer","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x9028a548"},{"inputs":[{"internalType":"uint256","name":"_gasLimit","type":"uint256"}],"name":"setGasLimit","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xee7d72b4"},{"inputs":[{"internalType":"uint256","name":"_intervalTime","type":"uint256"}],"name":"setIntervalTime","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x0d63e87d"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256[]","name":"configs","type":"uint256[]"}],"name":"setLevelUpConfig","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x9fa91cce"},{"inputs":[{"internalType":"uint256","name":"_maxGetNum","type":"uint256"}],"name":"setMaxGetNum","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc706b4eb"},{"inputs":[{"internalType":"uint256","name":"_maxLevel","type":"uint256"}],"name":"setMaxLevel","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x344f1ba5"},{"inputs":[{"internalType":"address","name":"_oldPlayInfo","type":"address"}],"name":"setOldPlayInfo","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x66bb4c41"},{"inputs":[],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x37a66d85"},{"inputs":[{"internalType":"address","name":"_pay","type":"address"}],"name":"setPayAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x60d1b489"},{"inputs":[{"internalType":"uint256","name":"_payvalue","type":"uint256"}],"name":"setPayValue","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xe7cd510c"},{"inputs":[{"internalType":"address","name":"_receiveAddr","type":"address"}],"name":"setReceiveAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa58696cd"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x3e0a322d"},{"inputs":[],"name":"setUnPaused","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x349fdb09"},{"inputs":[{"internalType":"address","name":"_payBnxAddr","type":"address"}],"name":"setpayBnxAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xdfc22dd7"},{"inputs":[{"internalType":"uint256","name":"_payBnxValue","type":"uint256"}],"name":"setpayBnxValue","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x9e6c5cc0"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x78e97925"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}]')
    }, 359: function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"address","name":"_needPlayerAddr","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_addr","type":"address"},{"indexed":false,"internalType":"bool","name":"_access","type":"bool"}],"name":"AccessAllowed","type":"event","signature":"0xdaa6f74aee7ee67b019171c24fdcfc6d981c279df198c623367e87dd8dce375e"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"inputs":[{"internalType":"uint256[]","name":"playerInfo","type":"uint256[]"},{"internalType":"address","name":"career","type":"address"}],"name":"Condition","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xae2e4447"},{"inputs":[],"name":"baseNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x77513c72"},{"inputs":[],"name":"block1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0eb524d4"},{"inputs":[],"name":"block2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa58c30c5"},{"inputs":[],"name":"block3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x705a3644"},{"inputs":[],"name":"diffNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd3220731"},{"inputs":[{"internalType":"uint256[]","name":"playerInfo","type":"uint256[]"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"}],"name":"getIncome","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe26a5e43"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"grantAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x0ae5e739"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"hasAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95a078e8"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"need","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xeadfe33b"},{"inputs":[],"name":"need2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf0de2a50"},{"inputs":[],"name":"needLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x49e3b692"},{"inputs":[],"name":"needParam","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd772c5a9"},{"inputs":[],"name":"needPlayerAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe955eaa5"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"rate1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xcf854969"},{"inputs":[],"name":"rate2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf555b815"},{"inputs":[],"name":"rate3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xaff1f15f"},{"inputs":[],"name":"rate4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x5dd8eb50"},{"inputs":[],"name":"rateBase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x014e95ba"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rateParams","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7a47a426"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"revokeAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x85e68531"},{"inputs":[{"internalType":"uint256","name":"_baseNum","type":"uint256"}],"name":"setBaseNum","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa5b67e75"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setBlock1","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x8d23f384"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setBlock2","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5598ae15"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setBlock3","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x159bdf31"},{"inputs":[{"internalType":"uint256","name":"_diffNum","type":"uint256"}],"name":"setDiffNum","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf5c3cd9d"},{"inputs":[{"internalType":"uint256","name":"_need","type":"uint256"}],"name":"setNeed","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5fbd6551"},{"inputs":[{"internalType":"uint256","name":"_need2","type":"uint256"}],"name":"setNeed2","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb6bede83"},{"inputs":[{"internalType":"uint256","name":"_needLevel","type":"uint256"}],"name":"setNeedLevel","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa870936a"},{"inputs":[{"internalType":"uint256","name":"_needParam","type":"uint256"}],"name":"setNeedParam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x91727816"},{"inputs":[{"internalType":"address","name":"_needPlayerAddr","type":"address"}],"name":"setNeedPlayerAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa8cad06d"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate1","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb86b14cd"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate2","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x79e32a62"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate3","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf3728b67"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate4","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x84e4191e"},{"inputs":[{"internalType":"uint256","name":"_rateBase","type":"uint256"}],"name":"setRateBase","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xaf56e167"},{"inputs":[{"internalType":"uint256[]","name":"_rateParams","type":"uint256[]"}],"name":"setRateParam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x808491af"},{"inputs":[{"internalType":"uint256","name":"_stopTime","type":"uint256"}],"name":"setStopTime","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc92501b7"},{"inputs":[],"name":"stopTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x03ff5e73"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}]')
    }, 360: function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"address","name":"_needPlayerAddr","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_addr","type":"address"},{"indexed":false,"internalType":"bool","name":"_access","type":"bool"}],"name":"AccessAllowed","type":"event","signature":"0xdaa6f74aee7ee67b019171c24fdcfc6d981c279df198c623367e87dd8dce375e"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"inputs":[{"internalType":"uint256[]","name":"playerInfo","type":"uint256[]"},{"internalType":"address","name":"career","type":"address"}],"name":"Condition","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xae2e4447"},{"inputs":[],"name":"baseNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x77513c72"},{"inputs":[],"name":"block1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0eb524d4"},{"inputs":[],"name":"block2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa58c30c5"},{"inputs":[],"name":"block3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x705a3644"},{"inputs":[],"name":"diffNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd3220731"},{"inputs":[{"internalType":"uint256[]","name":"playerInfo","type":"uint256[]"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"}],"name":"getIncome","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe26a5e43"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"grantAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x0ae5e739"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"hasAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95a078e8"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"need","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xeadfe33b"},{"inputs":[],"name":"need2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf0de2a50"},{"inputs":[],"name":"needLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x49e3b692"},{"inputs":[],"name":"needParam","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd772c5a9"},{"inputs":[],"name":"needPlayerAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe955eaa5"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"rate1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xcf854969"},{"inputs":[],"name":"rate2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf555b815"},{"inputs":[],"name":"rate3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xaff1f15f"},{"inputs":[],"name":"rate4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x5dd8eb50"},{"inputs":[],"name":"rateBase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x014e95ba"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rateParams","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7a47a426"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"revokeAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x85e68531"},{"inputs":[{"internalType":"uint256","name":"_baseNum","type":"uint256"}],"name":"setBaseNum","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa5b67e75"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setBlock1","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x8d23f384"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setBlock2","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5598ae15"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setBlock3","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x159bdf31"},{"inputs":[{"internalType":"uint256","name":"_diffNum","type":"uint256"}],"name":"setDiffNum","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf5c3cd9d"},{"inputs":[{"internalType":"uint256","name":"_need","type":"uint256"}],"name":"setNeed","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5fbd6551"},{"inputs":[{"internalType":"uint256","name":"_need2","type":"uint256"}],"name":"setNeed2","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb6bede83"},{"inputs":[{"internalType":"uint256","name":"_needLevel","type":"uint256"}],"name":"setNeedLevel","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa870936a"},{"inputs":[{"internalType":"uint256","name":"_needParam","type":"uint256"}],"name":"setNeedParam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x91727816"},{"inputs":[{"internalType":"address","name":"_needPlayerAddr","type":"address"}],"name":"setNeedPlayerAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa8cad06d"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate1","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb86b14cd"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate2","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x79e32a62"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate3","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf3728b67"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate4","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x84e4191e"},{"inputs":[{"internalType":"uint256","name":"_rateBase","type":"uint256"}],"name":"setRateBase","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xaf56e167"},{"inputs":[{"internalType":"uint256[]","name":"_rateParams","type":"uint256[]"}],"name":"setRateParam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x808491af"},{"inputs":[{"internalType":"uint256","name":"_stopTime","type":"uint256"}],"name":"setStopTime","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc92501b7"},{"inputs":[],"name":"stopTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x03ff5e73"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}]')
    }, 361: function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"address","name":"_needPlayerAddr","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_addr","type":"address"},{"indexed":false,"internalType":"bool","name":"_access","type":"bool"}],"name":"AccessAllowed","type":"event","signature":"0xdaa6f74aee7ee67b019171c24fdcfc6d981c279df198c623367e87dd8dce375e"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"inputs":[{"internalType":"uint256[]","name":"playerInfo","type":"uint256[]"},{"internalType":"address","name":"career","type":"address"}],"name":"Condition","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xae2e4447"},{"inputs":[],"name":"baseNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x77513c72"},{"inputs":[],"name":"block1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0eb524d4"},{"inputs":[],"name":"block2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa58c30c5"},{"inputs":[],"name":"block3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x705a3644"},{"inputs":[],"name":"diffNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd3220731"},{"inputs":[{"internalType":"uint256[]","name":"playerInfo","type":"uint256[]"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"}],"name":"getIncome","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe26a5e43"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"grantAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x0ae5e739"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"hasAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95a078e8"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"need","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xeadfe33b"},{"inputs":[],"name":"need2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf0de2a50"},{"inputs":[],"name":"needLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x49e3b692"},{"inputs":[],"name":"needParam","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd772c5a9"},{"inputs":[],"name":"needPlayerAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe955eaa5"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"rate1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xcf854969"},{"inputs":[],"name":"rate2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf555b815"},{"inputs":[],"name":"rate3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xaff1f15f"},{"inputs":[],"name":"rate4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x5dd8eb50"},{"inputs":[],"name":"rateBase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x014e95ba"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rateParams","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7a47a426"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"revokeAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x85e68531"},{"inputs":[{"internalType":"uint256","name":"_baseNum","type":"uint256"}],"name":"setBaseNum","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa5b67e75"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setBlock1","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x8d23f384"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setBlock2","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5598ae15"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setBlock3","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x159bdf31"},{"inputs":[{"internalType":"uint256","name":"_diffNum","type":"uint256"}],"name":"setDiffNum","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf5c3cd9d"},{"inputs":[{"internalType":"uint256","name":"_need","type":"uint256"}],"name":"setNeed","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5fbd6551"},{"inputs":[{"internalType":"uint256","name":"_need2","type":"uint256"}],"name":"setNeed2","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb6bede83"},{"inputs":[{"internalType":"uint256","name":"_needLevel","type":"uint256"}],"name":"setNeedLevel","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa870936a"},{"inputs":[{"internalType":"uint256","name":"_needParam","type":"uint256"}],"name":"setNeedParam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x91727816"},{"inputs":[{"internalType":"address","name":"_needPlayerAddr","type":"address"}],"name":"setNeedPlayerAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa8cad06d"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate1","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb86b14cd"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate2","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x79e32a62"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate3","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf3728b67"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate4","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x84e4191e"},{"inputs":[{"internalType":"uint256","name":"_rateBase","type":"uint256"}],"name":"setRateBase","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xaf56e167"},{"inputs":[{"internalType":"uint256[]","name":"_rateParams","type":"uint256[]"}],"name":"setRateParam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x808491af"},{"inputs":[{"internalType":"uint256","name":"_stopTime","type":"uint256"}],"name":"setStopTime","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc92501b7"},{"inputs":[],"name":"stopTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x03ff5e73"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}]')
    }, 362: function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"address","name":"_needPlayerAddr","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_addr","type":"address"},{"indexed":false,"internalType":"bool","name":"_access","type":"bool"}],"name":"AccessAllowed","type":"event","signature":"0xdaa6f74aee7ee67b019171c24fdcfc6d981c279df198c623367e87dd8dce375e"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"inputs":[{"internalType":"uint256[]","name":"playerInfo","type":"uint256[]"},{"internalType":"address","name":"career","type":"address"}],"name":"Condition","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xae2e4447"},{"inputs":[],"name":"baseNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x77513c72"},{"inputs":[],"name":"block1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0eb524d4"},{"inputs":[],"name":"block2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa58c30c5"},{"inputs":[],"name":"block3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x705a3644"},{"inputs":[],"name":"diffNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd3220731"},{"inputs":[{"internalType":"uint256[]","name":"playerInfo","type":"uint256[]"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"}],"name":"getIncome","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe26a5e43"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"grantAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x0ae5e739"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"hasAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95a078e8"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"need","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xeadfe33b"},{"inputs":[],"name":"need2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf0de2a50"},{"inputs":[],"name":"needLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x49e3b692"},{"inputs":[],"name":"needParam","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd772c5a9"},{"inputs":[],"name":"needPlayerAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe955eaa5"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"rate1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xcf854969"},{"inputs":[],"name":"rate2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf555b815"},{"inputs":[],"name":"rate3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xaff1f15f"},{"inputs":[],"name":"rate4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x5dd8eb50"},{"inputs":[],"name":"rateBase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x014e95ba"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rateParams","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7a47a426"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"revokeAccess","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x85e68531"},{"inputs":[{"internalType":"uint256","name":"_baseNum","type":"uint256"}],"name":"setBaseNum","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa5b67e75"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setBlock1","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x8d23f384"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setBlock2","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5598ae15"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setBlock3","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x159bdf31"},{"inputs":[{"internalType":"uint256","name":"_diffNum","type":"uint256"}],"name":"setDiffNum","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf5c3cd9d"},{"inputs":[{"internalType":"uint256","name":"_need","type":"uint256"}],"name":"setNeed","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5fbd6551"},{"inputs":[{"internalType":"uint256","name":"_need2","type":"uint256"}],"name":"setNeed2","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb6bede83"},{"inputs":[{"internalType":"uint256","name":"_needLevel","type":"uint256"}],"name":"setNeedLevel","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa870936a"},{"inputs":[{"internalType":"uint256","name":"_needParam","type":"uint256"}],"name":"setNeedParam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x91727816"},{"inputs":[{"internalType":"address","name":"_needPlayerAddr","type":"address"}],"name":"setNeedPlayerAddr","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa8cad06d"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate1","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xb86b14cd"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate2","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x79e32a62"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate3","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf3728b67"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate4","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x84e4191e"},{"inputs":[{"internalType":"uint256","name":"_rateBase","type":"uint256"}],"name":"setRateBase","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xaf56e167"},{"inputs":[{"internalType":"uint256[]","name":"_rateParams","type":"uint256[]"}],"name":"setRateParam","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x808491af"},{"inputs":[{"internalType":"uint256","name":"_stopTime","type":"uint256"}],"name":"setStopTime","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc92501b7"},{"inputs":[],"name":"stopTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x03ff5e73"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}]')
    }, 363: function (e) {
        e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_addr","type":"address"},{"indexed":false,"internalType":"bool","name":"_access","type":"bool"}],"name":"AccessAllowed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"career","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"address","name":"payAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"OrderId","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"BuyPlayer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"career","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"OrderId","type":"uint256"}],"name":"CancelSellPlayer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"career","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"address","name":"payAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"OrderId","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"SellPlayer","type":"event"},{"inputs":[],"name":"OrderId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addWalletAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"buyPlayer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"cancelPlayer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getBuyerOrder","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"getOrder","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"getOrderInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOrdered","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOrdering","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getSellerFilledOrder","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getSellerOrder","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"grantAccess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"hasAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rateBase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"removeWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"revokeAccess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"career","type":"address"},{"internalType":"address","name":"payAddr","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"name","type":"string"}],"name":"sellPlayer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeto","type":"address"}],"name":"setFeeto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"},{"internalType":"uint256","name":"_rateBase","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenOrder","outputs":[{"internalType":"uint256","name":"orderId","type":"uint256"},{"internalType":"address","name":"careerAddr","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"payAddr","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"string","name":"name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
    }, 364: function (e) {
        e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_addr","type":"address"},{"indexed":false,"internalType":"bool","name":"_access","type":"bool"}],"name":"AccessAllowed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"career","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"address","name":"payAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"OrderId","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"BuyPlayer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"career","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"OrderId","type":"uint256"}],"name":"CancelSellPlayer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"career","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"address","name":"payAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"OrderId","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"SellPlayer","type":"event"},{"inputs":[],"name":"OrderId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addWalletAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"buyPlayer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"cancelPlayer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getBuyerOrder","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"getOrder","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"getOrderInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOrdered","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOrdering","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getSellerFilledOrder","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getSellerOrder","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"grantAccess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"hasAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rateBase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"removeWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"revokeAccess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"career","type":"address"},{"internalType":"address","name":"payAddr","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"name","type":"string"}],"name":"sellPlayer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeto","type":"address"}],"name":"setFeeto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"},{"internalType":"uint256","name":"_rateBase","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenOrder","outputs":[{"internalType":"uint256","name":"orderId","type":"uint256"},{"internalType":"address","name":"careerAddr","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"payAddr","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"string","name":"name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
    }, 365: function (e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')
    }, 366: function (e) {
        e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addMinter","type":"address"}],"name":"addMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_delMinter","type":"address"}],"name":"delMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getMinter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinterLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
    }, 404: function (e, t) {
    }, 406: function (e, t) {
    }, 408: function (e, t) {
    }, 412: function (e, t) {
    }, 439: function (e, t) {
    }, 441: function (e, t) {
    }, 450: function (e, t) {
    }, 452: function (e, t) {
    }, 462: function (e, t) {
    }, 464: function (e, t) {
    }, 582: function (e, t) {
    }, 584: function (e, t) {
    }, 591: function (e, t) {
    }, 592: function (e, t) {
    }, 763: function (e, t, n) {
        "use strict";
        n.r(t);
        var a, i, s, u, r, p, y, d, o, l, c, m, b = n(0), f = n.n(b), x = n(40), T = n.n(x), g = function (e) {
                e && e instanceof Function && n.e(3).then(n.bind(null, 785)).then((function (t) {
                    var n = t.getCLS, a = t.getFID, i = t.getFCP, s = t.getLCP, u = t.getTTFB;
                    n(e), a(e), i(e), s(e), u(e)
                }))
            }, w = (n(391), n(181)), h = n(43), j = n(235), v = n(45), M = n.n(v), O = n(140), A = n(33), k = n(66),
            _ = n(50), C = n(67), I = n(784), B = n(772), N = n(777), S = n(158), P = n(47), F = n(770), E = n(779),
            D = n(383), z = n(780), L = n(781), R = n(773), W = n(782), Q = n(783), J = n(771), G = n(774), U = n(778),
            Y = n(776), q = n(775), V = n(141), K = n.n(V),
            H = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACqUlEQVR4nO2a0XWrMAyGGaEjMEI2KBvcjsAGzQawQbNB2aCZQH82aDZINmg26H2weq+r2GCIDcZY5+ghJ7FkfdhCkV0UWbJkyWIQAAcA34noxxQAS0/aq2YAGUAGkAFkABnAggCI6AagYm3583YAAKiF/VkLrUUBENFJ2iei02YAANgZ7L8AaAe0SwHAfrTz3/OofOSLpQAcHwn+R3xsl9kBENEZwJOwWQNoevTFMI/Sx8OYFQAv2dIQ/NC4q2EeWBUADn4nbO0cx7djoUUFwBR8URQFEV0dxp4Nc/haDQDe86XJ1lASY0AmcN5qhdAAjhAJL6TAfUuFB2BKXHNINACg9und8g0tMQH4BvBFRH8AvAK4QLzPocraRxLaJ+5fq1EB+KXyz4+nZFYlCYCIzkR0coCUHgAiugmf7dYAnITPzQPo6xKlBwCi9h/IA0kCqIXPy9YA7DR/TwN20wIgS2ioHuF2AAA4CH9DDdB0AFg6RkOl8noBQNXy+m/24vtaH2vpAsv/F/ECgHqaDeub+K4z+LroYKASYis6SZ+azY/YAdi0Nfj5V/xY5lGvsi2uKwdQmoITv21g6SxBHZBMBjE7AF6+B1PgbP+1Z/x7z7gSE47MggPgpmgH9VStHSKo/e26h72BCA3g7kTHEniDaZ2hPhBVDABqmx1ulb1PCNoJBBw7xKEBXMDJi4ieofb36FfVCG2gVlQFxxUVGkD0mgFkABlAPAD0VjhXd0ft8zkpABxQC9XwcD5Cg8rwewDdqu4I8WQ7DtjbiTHU+/7gctdgKQAdHCpCH8KrY9TKmOLE5WlfoZbpbHcDxBxNfYPwADhxVf5Dmi5QfQMriCkGVxG4FBuI0Yb0/bWGwHXRtsbtkRVQQ939qfxPcR7B/57BQ9d1s2TJkq78BZOc/nUYxqeTAAAAAElFTkSuQmCC",
            X = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADEklEQVR4nO2aQY7aMBSGfQSOwBG4QbMc5Rnp9wUqVHUzUkew6aIruEG5QblBOQIn6Myyu+EGIHUZp+4i8WCMDTEFJg7+pbcAY+e9L078/AxjSUlJSQ79fXz6VX79prpg8vFpGwxAfpn8eW/HL2nBAIqPn37L0WfVFQsHwMVKcqG6YglAApAAJABxASCxlDlGksQ2HgAk1nIIFByZzyRhEeJwwTGLBkDBMT89LjIbmgJ6KsegCwBmur8cAiXHtLaxAnouAHt9ugJAPaBvt5WEiXMGDAHX91EDOAjySJt6QJ8xxkrC5P4AkFg7AyXxtnuzwXQMABb6egrolYRJwTErODLP95aJl1YCYIyxg/Xb9aznGAU7tufjIejWADjpNImtXhkYY0wNxQdtdh+VY2C2a5OEHxED2E3/gvC8Nw7hWbfJHKPo3gGMMVZyjI08YGrnAfo5901jA1h8q4ArDzBfggUXq7c77EmNowZwahU4BuouAEiOTckxtZ/9OwLQ3OEoASig1ygP8JmRIUaZCWoIugag830bQMHFylUzMPMDxqo84KCuELg83hyAf1xjBtSz4lxJjk2rAOjUVgG9U3lANdXxav5G28FewBqr5JiGZIG3nAEZY+7n1lsPcBo2Oz/ieglmPqfvYhXQfSWJ5f0BMIoYrr6dB7CX3zvbOw+gKon78vt7AJAx5t+/BwGIsSZo3LF5IwAklu46H2Yqx0CPd7wmiFnTo7OrArD296+7O4mFTl0NQNlZDnn9dAO/LYC6hOU79DAlOX5KLlTJMXbV+UJtD/i7vgNce3sj1S0I35s6ew27OoC2WwKQACQACUACkAAkAO0AUHDxUlWExUqSWFb7gupzyJl/FACqYDGXQ8Dc5Jy+PrKSMJGExSX+K3g7ACS2krCQQ8Cu7/+P6rOBuSSxbieAOuhLBXxMKscgdGYEX6QRABLrkjC55J0Oka4VNJkVwYMfA6CPtC4f0vmq/1fsBRE8oLuy277AbflABA9kAoghcFP1wexeuSx4kJrkMqbAbakH9CVhoY/lkpKSkmz9A/wdS4jw+EtQAAAAAElFTkSuQmCC",
            Z = n.p + "static/media/role_Mage.79d7d0ea.png", $ = n.p + "static/media/role_Ranger.45f429ae.png",
            ee = n.p + "static/media/role_Robber.375e1c5c.png", te = n.p + "static/media/role_Warrior.4b142cba.png",
            ne = n(159), ae = n(355), ie = n(356), se = n(357), ue = n(358), re = n(359), pe = n(360), ye = n(361),
            de = n(362), oe = n(363), le = n(364), ce = n(365), me = n(366),
            be = ["41446690855590380100686024974425318434884239395091725290636392559729728003117", "8271313562003624978555403903431695194675968111492518758819752469829272952521", "57735561373474626782556210168181246845318984200541138821481497533236121088597", "107127445099282460771357416008337985649909283749909769236109213832538790463188", "101133198754419417180570506207043066856952608117375755559887814078236883253588", "18641471785921658230335687314445347099745026691760858486671084603829236826594", "27673266925457125493532912723490215650447428733018461799926004192363517572252", "85964664575358738272788941691688709764191646657126290233791784579359738055307", "65064006179107107744548348881630101849223795375391114871544748904378876512863", "79632369827952626085369623404331755292613427987507886102096721915841651035057", "109931325830382602986806296425401973034808537994395104957731772914406206573866", "7366376380418883908077938992630053456653695027201540553931696539919686103957", "15349135738031446675864372138474697181152359785512444606268173471434572651596", "104674960956897760527924444143350511036367332426589522107774858921943862704075", "105485772130260230550063969364037783539373274307970298760078560254578675297732", "46054019991597115431908548373249730685813602950097420552715905773664627653037", "69192554504826863889445900241171421909112509872411960918674712153745696060824", "89000116146150944765047246406818074324286962073009997287076211316252486027719", "74021955130233324367993455640969376878406879738204598268009954727780272603230", "27732694446983408032332542764403041257627716139672532761791064022940762304179", "65362676563876566613957357477074593930398949670337430089560819581190827680557", "34888355027637789948111356073791555317050771022195679706546390852687691753148", "29129371493080855081822793098841826961150950002912986745584554621394162255820", "3651704887682392618674126959572815070454652125531886950106643788803841457412", "21675480637656620618312742699558024217941871834670779107265150299838167250745", "19652379793890158944117721406402231542494771414578844048471628534809660855912", "51387715718762240215459582984962482531041721294118843778202379237088840966790", "84552716204288892973469761677286986973713101215122170864216385583325348473789", "79283574323472962205836034140462725305636225379534452622461860698552802821784", "66159832357606314325340069327079132427563013171036438474896782690127468674010", "54019878748270305748333573109547617931602899767250169203478775439407556144261", "107517811069979541120845245687916525871295066557805237594316689239291441814041", "43101466109743151288863225997594038107910377793789882408682888699081278796935", "100623228763013296451083770218944496395149088636213144841900118457897769406455", "92394317435437702947010065656784098586208099478637935378639231692489184541061", "46555647150221069302778219662418698723319887859315039137254089743087639678665", "55219597855963271510823729888177881628779924969851639319776754431415019436858", "96249570360665360164349689372236488635720584043194402073450258111687799232097", "18757027585600792927105459107975106334125645831931627707019340742246801373721", "40934043843079738824728899885791026719474973922903580412961413620935864420068", "27421181995874829055852901417153671511513322475103524408975229603219766830181", "64192994048481460241214892670315680688682048231000502483842328093228722416819", "85777183516986600630616706959441440090267763997101534204585296674683470153363", "26267835163379430286135771039178484149997369179745878709742884448294194823337", "9090467348331124748231693687805522425220259421554171853144805471641762116567", "65651321786132653393843172946910034683059674532799298719940339280117320606173", "103083206037144325938878361205952649210888719917501707037519371872865140933517", "56096862104032310797264262395569541973518801033250163810244477022466356716231", "80059612751704442995443590112348956459845469934722686430962561479106632622076", "92738939661411386423855120666757675953291649588332935808098482314224913829283", "100950360902084149872710000098477386804520472569905603583829304386441093750260", "64674409899214669159114750294270994465669154798228908472764553873201751568630", "91591192311950896720544682602921039333721092057753536804569934073592416894709", "81358049358156110772387532244210663499496285346041218520552934541685319584160", "53590721247989083097502266516600032878439648823712152597583122018426533311836", "14120049084058120215945322817020615020765976488379097782490220167407715722940", "21054101049643395958788734014297715327983590735425939624770104306804424499", "20171751298841602101289660727792553063086275323605485798128276475034545834553", "68937082556236641831377044758080632053609207474439019625371420618531334445091", "17510949037154803313822283261514297746691449694585753103154787709083942403140", "15110811230924996860841681667386099480594733720595781625450231552966677998734", "91902406981306233801717993710711982361865872908047892407058060461616695249088", "70416012199235162745404961490078489174486853918844084391943639314228480000725", "111211621794641466159578995044436786529781181839393511474526050890021011214810", "75812006286695900314384613576514811782414909802531408390005005797289424181895", "61589163983726488433474619762161823743474891747595785261178023438001247787015", "101126213114868102489786550873370587023765534113813528537272587810075699228183", "66091577431797580165278074630027327681033719104721567042190863337676779503663", "52605248038112606113497789347660490428054599334550903500676399992818694198659", "22991902559847535862870481088995722256409348862205473388481379754525019321126", "49776774142165641252533169832960438409272998969997787221593979601694735205300", "3986230190996125810770248227791959295595618944968484141727645870209652114920", "29919707434211188181326369614168584143486806134329839085928770107774771138110", "14294728915701843422464628498070679005727837063216857221875348873518462383491", "27742653921176727468036786202146608437840527729474941137640390049005233097987", "67617740484747158465555968359576803381928602239177945158134739736684125354069", "83154073416447977537516544282070818994239451944059161194713444450793331702799", "101541774575647511727112038197175107286642484897493459691560986844844780217880", "108625144050191755855554826458568960094156073875310654089987590810536910522990", "97922173510576655338855359677921969375254499264289661553580075721386511543260", "67586016505545950045330996765976291724521077768124215017710878944468625209568", "99141785732783772492779148800405663922769651450424985429694929771424431299216", "35725528379060577592750317310931308476910708913887587690781352001101861742549", "109080212900169673608544574531646406012592431258743262409286486589342428346925", "38869388046428513504835424823628055420646884635749020664787386540341224687908", "59410717455407387036466135468938329318430775140847014859534902904272937504207", "31390440276969604918318917413248072368316849512794484654438216364566340742952", "76537924176756791625235983263518705330073034077217731487568189881436040270662", "38226145282028897796171615891868864842552434920386543474693284707223593195584", "72266986939829245922073632428819210646150039572575314208033630821366382841180", "84462235955271227266775636315936457533383515406356316883244024021360332421362", "43713061975071413114985334829918349145830699628855225947393950243307177393768", "8707560141692794917840389030836857342999057622879263018681321741331478103637", "90573724463516166512767362542193105329468077620511597296539282844440074025851", "74570233861687134064773733529119784176799394417819258690571408635897590177686", "14901061701455944948895190461336240562447298062127517021527720490232570758764", "4353212229054287199577298547491062828546538772531593759502347389990024415129", "72707276357201054250899054650326279073335335402134127387475145260175382384659", "69890838928780897962677556328015839136704481353662131910795219582278660167698", "33474588903260193792458729660742691155639123937386500559790415444203838932727", "57704217313887626074579960752128152266867755087059527455039834601858108882619", "39333309463426601582027544853617228468095318960855611488953542681881181367365", "27396614627231309138738573327042615007399237520531074395657747160913536553374", "67901778262847158242868955835626777157125344269114157573071178820855210049887", "75210874588850868988935829264633790583397944594096497305013676132140273960078", "4595534528018894382378427860833710999629896479456438904669013251048312736010", "29409380312979186899773108413792390578798974134600083290487831711214346065962", "22174590659097323238376524699561409531678065286975192066118959072672309285233", "11943167785552639894968569855276811608348764127123017589977371707553433570751", "9529139232298323407128691768323920560514476609244404965006207767539166151987", "115718717924877689240488480627882973974703209606754194638104133483688446070104", "59441622506437670796455767129595505119099697077254647272168952649172962137763", "115631010217925846648745236163875680240089708902828953127120825485762455817540", "25579707829909213697371530017893151894870400240838513379817742289227845569134", "105105773093106813026360093707650963840365196434692492955770335790141281369063", "77701340450964696921035276746466100880796992592602440991527364974147209892535", "111300362997017748737698710308083136491246026631106859315841730465866560650008", "83319513183697435765602796736065272643497330813965616525708174993197423653874", "66700292562571191374024127956317180507638565319916687195495793912859607805493", "62641252477068834258731763154384468527762101011462451059064530573642310289588", "31252421095725546543115626501217974475216511775547995216564931595824026199479", "19704140980730567115455142140384698382256782974363873065565478981039537839085", "5661934525933659681255707272103149818725890757400084790947754777796718696510", "33915862568455175139426679328113053798541276587161406583725305938315874189499", "38825993525303372972854292467144544059995658974088783736618280824818562802385", "27389363373843943610155040146557695115531950634643660963616437482520210919920", "41224198090383350333827299126285872720301433725599902701836527118531469362825", "89586881624419246139546207525440866145350470229924856098505972204012754709876", "24726842338698769669979902601237643349462464228925028547378845147164611478776", "67743876030010065086920022649975202671888693810747945850620225508649160882480"],
            fe = n(5), xe = B.a.Countdown, Te = N.a.Link, ge = S.a.Option, we = {
                chainId: "0x38",
                chainName: "BSC",
                nativeCurrency: {name: "BSC", symbol: "BSC", decimals: 18},
                rpcUrls: ["https://bsc-dataseed3.binance.org"],
                blockExplorerUrls: ["https://bscscan.com/"]
            };

        function he(e) {
            var t = new K.a(e);
            return t.eth.extend({
                methods: [{
                    name: "chainId",
                    call: "eth_chainId",
                    outputFormatter: t.utils.hexToNumber
                }]
            }), t
        }

        var je = "https://market.binaryx.pro/getSales?page=1&page_size=4999&status=selling&name=&sort=time&direction=desc&career=&value_attr=&start_value=&end_value=&pay_addr=",
            ve = "0xaF9A274c9668d68322B0dcD9043D79Cd1eBd41b3", Me = "0x22F3E436dF132791140571FC985Eb17Ab1846494",
            Oe = "0xC6dB06fF6e97a6Dc4304f7615CdD392a9cF13F44", Ae = "0xF31913a9C8EFE7cE7F08A1c08757C166b572a937",
            ke = "0xfA65a5751ef6079C1022Aa10b9163d7A2281360A", _e = "0x480d503B12ae928e8DcCd820CE45B2f6F39Ad598",
            Ce = "0x3a4D27B77B253bdb9AFec082D8f5cDE5A4D713E1", Ie = "0x21D4Da5833d93944B8340788C6b463ED8420838B",
            Be = "0x81E9aCe9511A7d56fd31940d1C49425CA3a2B8f8", Ne = "0xC5dDbb4ac27A939D914059A023C6A35F377B67Ff",
            Se = "0xdcC5C1e7A3ADC8b7635565183a7385026502440B", Pe = "0x0ac4eB7978E0dA0d53824bd590354C8Bd264C4e6",
            Fe = function (e) {
                switch (e) {
                    default:
                        return "\u517c\u804c";
                    case _e:
                        return "\u917f\u9152";
                    case Ce:
                        return "\u4f10\u6728";
                    case Ie:
                        return "\u5377\u8f74";
                    case Be:
                        return "\u6253\u730e";
                    case Ne:
                        return "\u5b88\u536b";
                    case Se:
                        return "\u58eb\u5175";
                    case Pe:
                        return "\u987e\u95ee"
                }
            }, Ee = {
                86: 423,
                87: 576,
                88: 720,
                89: 864,
                90: 1008,
                91: 1152,
                92: 1296,
                93: 1440,
                94: 1584,
                95: 1728,
                96: 1872,
                97: 2016,
                98: 2160,
                99: 2304,
                100: 2448
            }, De = {1: 1, 2: 2, 3: 4, 4: 8, 5: 16, 6: 25, 7: 50, 8: 75, 9: 100, 10: 200, 11: 300, 12: 500},
            ze = "0x22F3E436dF132791140571FC985Eb17Ab1846494", Le = "0xaF9A274c9668d68322B0dcD9043D79Cd1eBd41b3",
            Re = "0xC6dB06fF6e97a6Dc4304f7615CdD392a9cF13F44", We = "0xF31913a9C8EFE7cE7F08A1c08757C166b572a937",
            Qe = "0x210d87ba2990082ff22ea15396303382b1faea56", Je = "0xe278BDF4541cc309b379F9A4E867F60fD6B7BC59",
            Ge = "0x698E165F2897e4daC68671c4cDFf337bbC543767", Ue = "0xfA65a5751ef6079C1022Aa10b9163d7A2281360A",
            Ye = "0x3a4D27B77B253bdb9AFec082D8f5cDE5A4D713E1", qe = "0x480d503B12ae928e8DcCd820CE45B2f6F39Ad598",
            Ve = "0x21D4Da5833d93944B8340788C6b463ED8420838B", Ke = "0x81E9aCe9511A7d56fd31940d1C49425CA3a2B8f8",
            He = "0x1416e6EA40CBb1F09Cd2dbEdAAd6fbFE3e38D51F", Xe = "0xD52039A262DeED2466beFA8dEe15e5d72c2DFAdF",
            Ze = "0xb3a6381070B1a15169DEA646166EC0699fDAeA79", $e = "0x8C851d1a123Ff703BD1f9dabe631b69902Df5f97",
            et = (a = {}, Object(_.a)(a, ve, "\u76d7\u8d3c"), Object(_.a)(a, Me, "\u6218\u58eb"), Object(_.a)(a, Oe, "\u6cd5\u5e08"), Object(_.a)(a, Ae, "\u6e38\u4fa0"), a),
            tt = C.a.div(i || (i = Object(k.a)(["\n  width: 100vw;\n  min-height: 100vh;\n"]))),
            nt = C.a.header(s || (s = Object(k.a)(["\n  width: 100vw;\n  padding: 10px 20px;\n  box-shadow: 0 1px 5px 5px #efefef;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  position: fixed;\n  background: #fff;\n  z-index: 99;\n"]))),
            at = C.a.div(u || (u = Object(k.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n"]))),
            it = C.a.span(r || (r = Object(k.a)(["\n  font-size: 1.5rem;\n  margin-left: 10px;\n"]))),
            st = C.a.main(p || (p = Object(k.a)(["\n  display: flex;\n  padding: 20px;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  padding-top: 100px;\n"]))),
            ut = C.a.div(y || (y = Object(k.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n"]))),
            rt = C.a.div(d || (d = Object(k.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  width: 870px;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),
            pt = Object(C.a)(P.a)(o || (o = Object(k.a)(["\n  margin: 5px;\n"]))),
            yt = C.a.div(l || (l = Object(k.a)(["\n  border: 1px solid #efefef;\n  margin-top: 10px;\n"]))),
            dt = Object(C.a)(F.a)(c || (c = Object(k.a)(["\n  width: 950px;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),
            ot = C.a.header(m || (m = Object(k.a)(["\n  width: 100%;\n  display: flex;\n  padding: 5px 10px;\n  align-items: center;\n  flex-direction: column;\n"]))),
            lt = function (e) {
                switch (e) {
                    case ve:
                        return ee;
                    case Me:
                        return te;
                    case Oe:
                        return Z;
                    case Ae:
                        return $
                }
            }, ct = function () {
                var e = navigator.userAgent;
                return e.indexOf("Android") > -1 || e.indexOf("iPhone") > -1
            }, mt = function (e, t, n, a) {
                var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 86,
                    s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 61;
                return e.filter((function (e) {
                    return e.career_address === t && e[n] >= i && e[a] >= s
                }))
            }, bt = function (e, t, n, a) {
                var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 86,
                    s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 61;
                return e.career_address === t && e[n] >= i && e[a] >= s
            }, ft = [{title: "\u5de5\u4f5c", dataIndex: "workname", width: 60}, {
                title: "\u6536\u76ca",
                dataIndex: "gold",
                width: 60,
                sorter: function (e, t) {
                    return e.gold - t.gold
                }
            }], xt = [{
                title: "", dataIndex: "win", render: function (e) {
                    return Object(fe.jsx)("img", {src: 1 == e ? X : H, style: {width: 30}})
                }
            }, {
                title: "\u5730\u7262", dataIndex: "name", render: function (e, t) {
                    return Object(fe.jsxs)("span", {children: [t.name, "-Lv", t.lv]})
                }
            }, {
                title: "\u89d2\u8272", dataIndex: "role", render: function (e, t) {
                    return Object(fe.jsxs)("span", {children: [et[t.p_role], "-Lv", t.p_lv]})
                }
            }, {
                title: "TokenID", dataIndex: "token_id", render: function (e) {
                    return Object(fe.jsxs)("span", {children: [e.substr(0, 6), "***", e.substr(-6, 6)]})
                }
            }, {
                title: "\u6740\u654c", dataIndex: "m_name", render: function (e) {
                    return Object(fe.jsx)(fe.Fragment, {
                        children: String(e).split(",").map((function (e) {
                            return Object(fe.jsx)("p", {children: e})
                        }))
                    })
                }
            }, {
                title: "\u5956\u52b1", dataIndex: "jl", render: function (e, t) {
                    return Object(fe.jsxs)(fe.Fragment, {children: [Object(fe.jsxs)("p", {children: [t.r_money, "\u4e2a\u91d1\u5e01"]}), Object(fe.jsxs)("p", {children: [t.r_coupon, "\u4e2a\u94c1\u8d28\u94a5\u5319"]}), Object(fe.jsxs)("p", {children: [t.r_coin, "\u4e2aBNX"]})]})
                }
            }, {
                title: "\u72b6\u6001", dataIndex: "r_status", render: function (e) {
                    return Object(fe.jsx)("span", {
                        style: {color: 1 === e ? "#666" : "red"},
                        children: 1 === e ? "\u5df2\u9886\u53d6" : "\u672a\u9886\u53d6"
                    })
                }
            }, , {
                title: "\u6536\u76ca", dataIndex: "shouyi", render: function (e, t) {
                    var n = 0;
                    switch (t.lv) {
                        case 1:
                            n = 2635;
                            break;
                        case 2:
                            n = 5713;
                            break;
                        case 3:
                            n = 11410
                    }
                    var a = t.r_money + 15e3 * t.r_coin - n;
                    return Object(fe.jsx)("span", {children: a})
                }
            }], Tt = [{
                title: "", dataIndex: "win", render: function (e) {
                    return Object(fe.jsx)("img", {src: 1 == e ? X : H, style: {width: 20}})
                }
            }, {title: "\u5730\u7262", dataIndex: "lv"}, {
                title: "\u89d2\u8272",
                dataIndex: "role",
                render: function (e, t) {
                    return Object(fe.jsxs)("span", {style: {fontSize: ".7rem"}, children: [et[t.p_role], t.p_lv]})
                }
            }, {
                title: "\u6740\u654c", dataIndex: "m_name", render: function (e) {
                    return Object(fe.jsx)(fe.Fragment, {
                        children: String(e).split(",").map((function (e) {
                            return Object(fe.jsx)("p", {style: {fontSize: ".7rem"}, children: e})
                        }))
                    })
                }
            }, {
                title: "\u5956\u52b1", dataIndex: "jl", render: function (e, t) {
                    return Object(fe.jsxs)(fe.Fragment, {
                        children: [Object(fe.jsxs)("p", {
                            style: {fontSize: ".7rem"},
                            children: [t.r_money, "\u91d1"]
                        }), Object(fe.jsxs)("p", {
                            style: {fontSize: ".7rem"},
                            children: [t.r_coupon, "\u94a5"]
                        }), Object(fe.jsxs)("p", {style: {fontSize: ".7rem"}, children: [t.r_coin, "BNX"]})]
                    })
                }
            }, {
                title: "\u6536\u76ca", dataIndex: "shouyi", render: function (e, t) {
                    var n = 0;
                    switch (t.lv) {
                        case 1:
                            n = 2635;
                            break;
                        case 2:
                            n = 5713;
                            break;
                        case 3:
                            n = 11410
                    }
                    var a = t.r_money + 15e3 * t.r_coin - n;
                    return Object(fe.jsx)("span", {style: {fontSize: ".7rem"}, children: a})
                }
            }], gt = [{
                title: "", width: 50, render: function (e, t) {
                    return Object(fe.jsx)("img", {style: {width: "40px"}, src: lt(t.career_address)})
                }
            }, {
                title: "\u89d2\u8272", dataIndex: "js", width: 60, sorter: function (e, t) {
                    return e.career_address - t.career_address
                }, render: function (e, t) {
                    return Object(fe.jsx)("p", {children: et[t.career_address]})
                }
            }, {
                title: "\u7b49\u7ea7", dataIndex: "level", width: 60, sorter: function (e, t) {
                    return e.level - t.level
                }
            }, {
                title: "\u603b\u5c5e\u6027", dataIndex: "total", width: 70, sorter: function (e, t) {
                    return e.total - t.total
                }
            }, {
                title: "\u529b\u91cf", dataIndex: "strength", width: 60, sorter: function (e, t) {
                    return e.strength - t.strength
                }, render: function (e, t) {
                    return Object(fe.jsxs)("span", {
                        style: {color: t.career_address === ve || t.career_address === Me || t.career_address === Ae ? "red" : "black"},
                        children: [t.strength, t.career_address === Me || t.career_address === Ae ? "(\u4e3b)" : "", t.career_address === ve ? "(\u526f)" : ""]
                    })
                }
            }, {
                title: "\u654f\u6377", dataIndex: "agility", width: 60, sorter: function (e, t) {
                    return e.agility - t.agility
                }, render: function (e, t) {
                    return Object(fe.jsxs)("span", {
                        style: {color: t.career_address === ve || t.career_address === Ae ? "red" : "black"},
                        children: [t.agility, t.career_address === ve ? "(\u4e3b)" : "", t.career_address === Ae ? "(\u526f)" : ""]
                    })
                }
            }, {
                title: "\u4f53\u8d28", dataIndex: "physique", width: 60, sorter: function (e, t) {
                    return e.physique - t.physique
                }, render: function (e, t) {
                    return Object(fe.jsxs)("span", {
                        style: {color: t.career_address === Me ? "red" : "black"},
                        children: [t.physique, t.career_address === Me ? "(\u526f)" : ""]
                    })
                }
            }, {
                title: "\u610f\u5fd7", dataIndex: "volition", width: 60, sorter: function (e, t) {
                    return e.volition - t.volition
                }
            }, {
                title: "\u667a\u529b", dataIndex: "brains", sorter: function (e, t) {
                    return e.brains - t.brains
                }, width: 60, render: function (e, t) {
                    return Object(fe.jsxs)("span", {
                        style: {color: t.career_address === Oe ? "red" : "black"},
                        children: [t.brains, t.career_address === Oe ? "(\u4e3b)" : ""]
                    })
                }
            }, {
                title: "\u7cbe\u795e", dataIndex: "charm", width: 60, sorter: function (e, t) {
                    return e.charm - t.charm
                }, render: function (e, t) {
                    return Object(fe.jsxs)("span", {
                        style: {color: t.career_address === Oe ? "red" : "black"},
                        children: [t.charm, t.career_address === Oe ? "(\u526f)" : ""]
                    })
                }
            }], wt = [{
                title: "\u89d2\u8272", dataIndex: "js", width: 60, sorter: function (e, t) {
                    return e.career_address - t.career_address
                }, render: function (e, t) {
                    return Object(fe.jsx)("p", {children: et[t.career_address]})
                }
            }, {
                title: "\u7b49\u7ea7", dataIndex: "level", width: 60, sorter: function (e, t) {
                    return e.level - t.level
                }
            }, {
                title: "\u4e3b\u5c5e\u6027", dataIndex: "m1", width: 70, render: function (e, t) {
                    var n = 0;
                    switch (t.career_address) {
                        case ve:
                            n = t.agility;
                            break;
                        case Me:
                        case Ae:
                            n = t.strength;
                            break;
                        case Oe:
                            n = t.brains
                    }
                    return Object(fe.jsx)("p", {children: n})
                }
            }, {
                title: "\u526f\u5c5e\u6027", dataIndex: "m2", width: 70, render: function (e, t) {
                    var n = 0;
                    switch (t.career_address) {
                        case ve:
                            n = t.strength;
                            break;
                        case Me:
                            n = t.physique;
                            break;
                        case Oe:
                            n = t.charm;
                            break;
                        case Ae:
                            n = t.agility
                    }
                    return Object(fe.jsx)("p", {children: n})
                }
            }], ht = [{
                title: "\u4ef7\u683c", sorter: function (e, t) {
                    return e.price - t.price
                }, render: function (e, t) {
                    return Object(fe.jsxs)("p", {children: [parseInt(t.price) / 1e18, "bnx"]})
                }
            }], jt = [{
                title: "\u94fe\u63a5", render: function (e, t) {
                    return Object(fe.jsx)("a", {
                        target: "_blank",
                        href: "https://".concat(ct() ? "m" : "market", ".binaryx.pro/#/oneoffsale/detail/").concat(t.order_id),
                        children: "\u8be6\u60c5\u9875"
                    })
                }
            }], vt = [{
                title: "ID", dataIndex: "token_id", width: 100, render: function (e, t) {
                    return Object(fe.jsxs)("p", {children: [String(t.token_id).substr(0, 5), "***", String(t.token_id).substr(-5, 5)]})
                }
            }], Mt = [{
                title: "", dataIndex: "hege", width: 40, render: function (e, t) {
                    var n = !1;
                    switch (t.career_address) {
                        case ve:
                            n = bt(t, ve, "agility", "strength");
                            break;
                        case Ae:
                            n = bt(t, Ae, "strength", "agility");
                            break;
                        case Me:
                            n = bt(t, Me, "strength", "physique");
                            break;
                        case Oe:
                            n = bt(t, Oe, "brains", "charm")
                    }
                    return Object(fe.jsx)(fe.Fragment, {
                        children: Object(fe.jsx)(E.a, {
                            color: n ? "green" : "black",
                            children: n ? ct() ? "\ud83c\ude34\ufe0f" : "\u5408\u683c" : ct() ? "\u9ed1" : "\u9ed1\u5974"
                        })
                    })
                }
            }], Ot = function () {
                var e, t = Object(w.useMetamask)(), n = t.connect, a = t.metaState, i = t.getAccounts, s = t.getChain,
                    u = window.ethereum, r = Object(b.useState)(""), p = Object(A.a)(r, 2), y = p[0], d = p[1],
                    o = Object(b.useState)([]), l = Object(A.a)(o, 2), c = l[0], m = l[1], f = Object(b.useState)([]),
                    x = Object(A.a)(f, 2), T = x[0], g = x[1], v = Object(b.useState)([]), k = Object(A.a)(v, 2), C = k[0],
                    B = k[1], F = Object(b.useState)([]), V = Object(A.a)(F, 2), H = V[0], X = V[1],
                    Z = Object(b.useState)([]), $ = Object(A.a)(Z, 2), ee = $[0], te = $[1], Ot = Object(b.useState)([]),
                    At = Object(A.a)(Ot, 2), kt = At[0], _t = At[1], Ct = Object(b.useState)([]), It = Object(A.a)(Ct, 2),
                    Bt = It[0], Nt = It[1], St = {}, Pt = Object(b.useState)(.17), Ft = Object(A.a)(Pt, 2), Et = Ft[0],
                    Dt = Ft[1], zt = Object(b.useState)(0), Lt = Object(A.a)(zt, 2), Rt = Lt[0], Wt = Lt[1],
                    Qt = Object(b.useState)(0), Jt = Object(A.a)(Qt, 2), Gt = Jt[0], Ut = Jt[1],
                    Yt = Object(b.useState)(Date.now() + 10200), qt = Object(A.a)(Yt, 2), Vt = qt[0], Kt = qt[1],
                    Ht = Object(b.useState)([]), Xt = Object(A.a)(Ht, 2), Zt = Xt[0], $t = Xt[1],
                    en = Object(b.useState)(!1), tn = Object(A.a)(en, 2), nn = (tn[0], tn[1]), an = Object(b.useState)(!1),
                    sn = Object(A.a)(an, 2), un = sn[0], rn = sn[1], pn = Object(b.useState)(!1), yn = Object(A.a)(pn, 2),
                    dn = yn[0], on = yn[1], ln = Object(b.useState)(!1), cn = Object(A.a)(ln, 2), mn = cn[0], bn = cn[1],
                    fn = Object(b.useState)(!1), xn = Object(A.a)(fn, 2), Tn = xn[0], gn = xn[1],
                    wn = Object(b.useState)(!1), hn = Object(A.a)(wn, 2), jn = hn[0], vn = hn[1],
                    Mn = Object(b.useState)(0), On = Object(A.a)(Mn, 2), An = On[0], kn = On[1], _n = Object(b.useState)(0),
                    Cn = Object(A.a)(_n, 2), In = Cn[0], Bn = Cn[1], Nn = Object(b.useState)(!1), Sn = Object(A.a)(Nn, 2),
                    Pn = Sn[0], Fn = Sn[1], En = Object(b.useState)(!1), Dn = Object(A.a)(En, 2), zn = Dn[0], Ln = Dn[1],
                    Rn = Object(b.useState)(!1), Wn = Object(A.a)(Rn, 2), Qn = Wn[0], Jn = Wn[1],
                    Gn = Object(b.useState)(!1), Un = Object(A.a)(Gn, 2), Yn = Un[0], qn = Un[1],
                    Vn = Object(b.useState)({}), Kn = Object(A.a)(Vn, 2), Hn = Kn[0], Xn = Kn[1],
                    Zn = Object(b.useState)(""), $n = Object(A.a)(Zn, 2), ea = $n[0], ta = $n[1],
                    na = Object(b.useState)({money: 0, coin: 0, coupon: 0}), aa = Object(A.a)(na, 2), ia = aa[0],
                    sa = aa[1], ua = Object(b.useState)({money: 0, coin: 0, coupon: 0, num: 0, gold: 0, bnx: 0}),
                    ra = Object(A.a)(ua, 2), pa = ra[0], ya = ra[1], da = Object(b.useState)([]), oa = Object(A.a)(da, 2),
                    la = oa[0], ca = oa[1], ma = Object(b.useState)([]), ba = Object(A.a)(ma, 2), fa = (ba[0], ba[1]);
                Object(b.useEffect)((function () {
                    Ca(), Ea(), ja(), ga()
                }), []);
                var xa = [{
                    title: "", dataIndex: "sj", width: 50, render: function (e, t) {
                        return Object(fe.jsx)(P.a, {
                            size: "small",
                            onClick: Oa(t),
                            disabled: t.level >= 5,
                            children: "\u5347\u7ea7"
                        })
                    }
                }], Ta = function (e) {
                    return function () {
                        wa(e), ha(e)
                    }
                }, ga = function () {
                    fetch("https://game.binaryx.pro//v1/dungeon/list?Page=1&Limit=3&lang=zh-cn&sign=ee05987d4d4e2c7bb18c2aa1858617a5", {method: "POST"}).then((function (e) {
                        return e.json()
                    })).then((function (e) {
                        return fa(e.data.Lists)
                    })).catch((function (e) {
                        return console.log(e)
                    }))
                }, wa = function (e) {
                    fetch("https://game.binaryx.pro/v1/user/wallet?GoldAddress=".concat(e, "&lang=zh-cn&sign=276bf144d035ba5f5ed0f52e06dfb9a4"), {method: "POST"}).then((function (e) {
                        return e.json()
                    })).then((function (e) {
                        sa(e.data)
                    })).catch((function (e) {
                        return console.log(e)
                    }))
                }, ha = function (e) {
                    Jn(!0), fetch("https://game.binaryx.pro/v1/dungeon/loglist?Page=1&GoldAddress=".concat(e, "&Limit=999999&lang=zh-cn&sign=4b71493003083bd0bbc252879b6357ff"), {method: "POST"}).then((function (e) {
                        return e.json()
                    })).then((function (e) {
                        console.log(e);
                        var t = e.data.Lists, n = t.reduce((function (e, t) {
                            return e + t.r_money
                        }), 0), a = t.reduce((function (e, t) {
                            return e + t.r_coupon
                        }), 0), i = t.reduce((function (e, t) {
                            return e + t.r_coin
                        }), 0), s = t.reduce((function (e, t) {
                            var n = 0;
                            switch (t.lv) {
                                case 1:
                                    n = 2635;
                                    break;
                                case 2:
                                    n = 5713;
                                    break;
                                case 3:
                                    n = 11410;
                                    break;
                                case 7:
                                    n = 70;
                                    break;
                                case 8:
                                    n = 80;
                                    break;
                                case 9:
                                    n = 90
                            }
                            return e + n
                        }), 0), u = t.reduce((function (e, t) {
                            var n = 0;
                            switch (t.lv) {
                                case 1:
                                case 2:
                                case 3:
                                    n = 0;
                                    break;
                                case 7:
                                    n = 70;
                                    break;
                                case 8:
                                    n = 80;
                                    break;
                                case 9:
                                    n = 90
                            }
                            return e + n
                        }), 0);
                        ya({money: n, coupon: a, coin: i, num: t.length, gold: s, bnx: u}), ca(e.data.Lists)
                    })).catch((function (e) {
                        console.log(e), Jn(!1)
                    })).finally((function () {
                        return Jn(!1)
                    }))
                }, ja = function () {
                    var e = Object(O.a)(M.a.mark((function e() {
                        var t, r;
                        return M.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (u.request({method: "wallet_addEthereumChain", params: [we]}).catch((function (e) {
                                    })), !a.isAvailable || a.isConnected) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.prev = 2, e.next = 5, n(K.a);
                                case 5:
                                    return e.next = 7, i();
                                case 7:
                                    return (t = e.sent).length > 0 && (r = t[0], d(r), Ma(), va(r), ka(r), Aa(r), Ta(r)()), e.next = 11, s();
                                case 11:
                                    if (56 === e.sent.id) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 14:
                                    _a(), e.next = 20;
                                    break;
                                case 17:
                                    e.prev = 17, e.t0 = e.catch(2), console.log(e.t0);
                                case 20:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[2, 17]])
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), va = function (e) {
                    St.goldContractNew.methods.balanceOf(e).call().then((function (e) {
                        console.log(e), Ut((Number(e) / 1e18).toFixed(4))
                    })), St.bnxContractNew.methods.balanceOf(e).call().then((function (e) {
                        Wt((Number(e) / 1e18).toFixed(4))
                    }))
                }, Ma = function () {
                    var e = he(K.a.givenProvider);
                    St.WarriorContract = new e.eth.Contract(ne, ze), St.RobberContract = new e.eth.Contract(ne, Le), St.MageContract = new e.eth.Contract(ne, Re), St.youxiaContract = new e.eth.Contract(ne, We), St.NewPlayInfoContract = new e.eth.Contract(ue, Qe), St.MiningContract = new e.eth.Contract(ae, Je), St.NewMiningContract = new e.eth.Contract(ie, Ge), St.LgongContract = new e.eth.Contract(se, Ue), St.BlacksmithContract = new e.eth.Contract(re, Ye), St.HunterContract = new e.eth.Contract(pe, qe), St.BookmangerContract = new e.eth.Contract(ye, Ve), St.RangeworkContract = new e.eth.Contract(de, Ke), St.saleContract = new e.eth.Contract(oe, Xe), St.saleContractNew = new e.eth.Contract(le, He), St.goldContractNew = new e.eth.Contract(ce, Ze), St.bnxContractNew = new e.eth.Contract(me, $e)
                }, Oa = function (e) {
                    return function () {
                        y ? (Ma(), St.NewPlayInfoContract.methods.getLevelUpConfig(e.level).call().then((function (t) {
                            console.log(t), St.NewPlayInfoContract.methods.levelUp(e.token_id, t[0], t[1]).send({from: y}).then((function () {
                                return ka(y)
                            })).catch((function (e) {
                                return console.log(e)
                            }))
                        })).catch((function (e) {
                            return console.log(e)
                        }))) : D.b.error("\u8bf7\u91cd\u65b0\u5237\u65b0\u7f51\u9875")
                    }
                }, Aa = function (e) {
                    if (e) {
                        Ma();
                        var t = he(K.a.givenProvider), n = [ke, _e, Ce, Ie, Be, Ne, Se, Pe];
                        vn(!0), te([]), Bn(0), kn(0), Nt([]);
                        var a = n.map((function (t) {
                            return new Promise((function (n) {
                                fetch("https://game.binaryx.pro/minev2/getWorks?address=".concat(e, "&work_type=").concat(t)).then((function (e) {
                                    return e.json()
                                })).then((function (e) {
                                    var t = e.data.result, a = [];
                                    t && (a = t.map((function (e) {
                                        return Object(j.a)(Object(j.a)({}, e), {}, {name: Fe(e.work_type)})
                                    }))), n(a)
                                }))
                            }))
                        }));
                        Promise.all(a).then((function (e) {
                            var n = e.reduce((function (e, t) {
                                return [].concat(Object(h.a)(e), Object(h.a)(t))
                            }), []).map(function () {
                                var e = Object(O.a)(M.a.mark((function e(n, a) {
                                    var i, s, u, r, p;
                                    return M.a.wrap((function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, ("\u517c\u804c" === n.name ? St.MiningContract : St.NewMiningContract).methods.getPlayerWork(n.token_id).call().catch((function (e) {
                                                    return console.log(e)
                                                }));
                                            case 2:
                                                return i = e.sent, e.next = 5, St.NewPlayInfoContract.methods.getPlayerInfoBySet(n.token_id).call().catch((function (e) {
                                                    return console.log(e)
                                                }));
                                            case 5:
                                                return s = e.sent, e.next = 8, t.eth.getBlockNumber();
                                            case 8:
                                                u = e.sent, e.t0 = n.name, e.next = "\u517c\u804c" === e.t0 ? 12 : "\u517c\u804c" === e.t0 ? 14 : "\u4f10\u6728" === e.t0 ? 16 : "\u917f\u9152" === e.t0 ? 18 : "\u5377\u8f74" === e.t0 ? 20 : "\u6253\u730e" === e.t0 ? 22 : 24;
                                                break;
                                            case 12:
                                            case 14:
                                            case 24:
                                                return r = St.LgongContract, e.abrupt("break", 26);
                                            case 16:
                                                return r = St.BlacksmithContract, e.abrupt("break", 26);
                                            case 18:
                                                return r = St.HunterContract, e.abrupt("break", 26);
                                            case 20:
                                                return r = St.BookmangerContract, e.abrupt("break", 26);
                                            case 22:
                                                return r = St.RangeworkContract, e.abrupt("break", 26);
                                            case 26:
                                                return e.next = 28, r.methods.getIncome(s[0], i.startTime, u + "").call().catch((function (e) {
                                                    return console.log(e)
                                                }));
                                            case 28:
                                                return p = e.sent, e.abrupt("return", {
                                                    career_address: s[1],
                                                    strength: Number(s[0][0]),
                                                    agility: Number(s[0][1]),
                                                    physique: Number(s[0][2]),
                                                    volition: Number(s[0][3]),
                                                    brains: Number(s[0][4]),
                                                    charm: Number(s[0][5]),
                                                    level: Number(s[0][6]),
                                                    total: Number(s[0][0]) + Number(s[0][1]) + Number(s[0][2]) + Number(s[0][3]) + Number(s[0][4]) + Number(s[0][5]),
                                                    token_id: n.token_id,
                                                    workname: n.name,
                                                    gold: Number(p / 1e18).toFixed(2)
                                                });
                                            case 30:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function (t, n) {
                                    return e.apply(this, arguments)
                                }
                            }());
                            Promise.all(n).then((function (e) {
                                vn(!1), te(e);
                                var t = e.reduce((function (e, t) {
                                    return Number(e) + Number(t.gold)
                                }), 0), n = e.reduce((function (e, t) {
                                    var n = !1;
                                    switch (t.career_address) {
                                        case ve:
                                            n = bt(t, ve, "agility", "strength");
                                            break;
                                        case Ae:
                                            n = bt(t, Ae, "strength", "agility");
                                            break;
                                        case Me:
                                            n = bt(t, Me, "strength", "physique");
                                            break;
                                        case Oe:
                                            n = bt(t, Oe, "brains", "charm")
                                    }
                                    if (n && t.level >= 2) {
                                        var a = 0;
                                        switch (t.career_address) {
                                            case ve:
                                                a = t.agility;
                                                break;
                                            case Ae:
                                            case Me:
                                                a = t.strength;
                                                break;
                                            case Oe:
                                                a = t.brains
                                        }
                                        return e + Number(Ee[a]) * Number(De[t.level])
                                    }
                                    return e + 288
                                }), 0);
                                Bn(n), kn(t)
                            }))
                        }))
                    } else D.b.error("\u8bf7\u91cd\u65b0\u5237\u65b0\u7f51\u9875")
                }, ka = function () {
                    var e = Object(O.a)(M.a.mark((function e(t) {
                        var n, a, i, s, u, r, p, y, d;
                        return M.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (t) {
                                        e.next = 3;
                                        break
                                    }
                                    return D.b.error("\u8bf7\u91cd\u65b0\u5237\u65b0\u7f51\u9875"), e.abrupt("return");
                                case 3:
                                    return Ma(), X([]), gn(!0), rn(!1), on(!1), _t([]), e.next = 11, St.WarriorContract.methods.balanceOf(t).call().catch((function (e) {
                                        return console.log(e)
                                    }));
                                case 11:
                                    return n = e.sent, e.next = 14, St.RobberContract.methods.balanceOf(t).call().catch((function (e) {
                                        return console.log(e)
                                    }));
                                case 14:
                                    return a = e.sent, e.next = 17, St.MageContract.methods.balanceOf(t).call().catch((function (e) {
                                        return console.log(e)
                                    }));
                                case 17:
                                    return i = e.sent, e.next = 20, St.youxiaContract.methods.balanceOf(t).call().catch((function (e) {
                                        return console.log(e)
                                    }));
                                case 20:
                                    for (s = e.sent, u = [], r = 0; r < n; r++) u.push(St.WarriorContract.methods.tokenOfOwnerByIndex(t, r).call().catch((function (e) {
                                        return console.log(e)
                                    })));
                                    for (p = 0; p < a; p++) u.push(St.RobberContract.methods.tokenOfOwnerByIndex(t, p).call().catch((function (e) {
                                        return console.log(e)
                                    })));
                                    for (y = 0; y < i; y++) u.push(St.MageContract.methods.tokenOfOwnerByIndex(t, y).call().catch((function (e) {
                                        return console.log(e)
                                    })));
                                    for (d = 0; d < s; d++) u.push(St.youxiaContract.methods.tokenOfOwnerByIndex(t, d).call().catch((function (e) {
                                        return console.log(e)
                                    })));
                                    Promise.all(u).then((function (e) {
                                        var t = e.map(function () {
                                            var e = Object(O.a)(M.a.mark((function e(t) {
                                                var n;
                                                return M.a.wrap((function (e) {
                                                    for (; ;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, St.NewPlayInfoContract.methods.getPlayerInfoBySet(t).call().catch((function (e) {
                                                                return console.log(e)
                                                            }));
                                                        case 2:
                                                            return n = e.sent, e.abrupt("return", {
                                                                career_address: n[1],
                                                                strength: Number(n[0][0]),
                                                                agility: Number(n[0][1]),
                                                                physique: Number(n[0][2]),
                                                                volition: Number(n[0][3]),
                                                                brains: Number(n[0][4]),
                                                                charm: Number(n[0][5]),
                                                                level: Number(n[0][6]),
                                                                total: Number(n[0][0]) + Number(n[0][1]) + Number(n[0][2]) + Number(n[0][3]) + Number(n[0][4]) + Number(n[0][5]),
                                                                token_id: t
                                                            });
                                                        case 4:
                                                        case"end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function (t) {
                                                return e.apply(this, arguments)
                                            }
                                        }());
                                        Promise.all(t).then((function (e) {
                                            return X(e)
                                        })).catch((function (e) {
                                            return console.log(e)
                                        })), gn(!1)
                                    }));
                                case 27:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), _a = function () {
                    window.ethereum.on("accountsChanged", (function (e) {
                        if (e.length > 0) {
                            var t = e[0];
                            d(t), Ma(), ka(t), Aa(t)
                        }
                    })), window.ethereum.on("chainChanged", (function (e) {
                    }))
                }, Ca = function () {
                    nn(!0), Ma();
                    try {
                        fetch(je).then((function (e) {
                            return e.json()
                        })).then(function () {
                            var e = Object(O.a)(M.a.mark((function e(t) {
                                var n;
                                return M.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            n = (n = t.data.result.items).filter((function (e) {
                                                return -1 === be.indexOf(e.token_id)
                                            })), m(n), Ia(n);
                                        case 4:
                                        case"end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }())
                    } catch (e) {
                        console.log(e)
                    } finally {
                        nn(!1)
                    }
                }, Ia = function (e) {
                    var t = [86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100].map((function (t) {
                        return [].concat(Object(h.a)(mt(e, ve, "agility", "strength", t)), Object(h.a)(mt(e, Ae, "strength", "agility", t)), Object(h.a)(mt(e, Me, "strength", "physique", t)), Object(h.a)(mt(e, Oe, "brains", "charm", t))).filter((function (e) {
                            return e.agility === t || e.strength === t || e.brains === t || e.physique === t
                        })).sort((function (e, t) {
                            return parseInt(e.price) - parseInt(t.price)
                        }))[0]
                    }));
                    g(t)
                }, Ba = function (e, t, n, a) {
                    switch (e) {
                        case ve:
                            return t.career_address === ve && t.agility >= n && t.strength >= a;
                        case Ae:
                            return t.career_address === Ae && t.strength >= n && t.agility >= a;
                        case Me:
                            return t.career_address === Me && t.strength >= n && t.physique >= a;
                        case Oe:
                            return t.career_address === Oe && t.brains >= n && t.charm >= a
                    }
                }, Na = function (e) {
                    return function () {
                        he(K.a.givenProvider).eth.sendTransaction({
                            from: y,
                            to: "0xbD39A69d3cEb577c074951a600Eaa8EFD2A778c0",
                            value: "".concat(1e18 * e)
                        }, (function (e, t) {
                        })).then((function (e) {
                            D.b.success("\u611f\u8c22\u5927\u4f6c")
                        })).catch((function () {
                        })).catch((function (e) {
                            return console.log(e)
                        }))
                    }
                }, Sa = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return function () {
                        if (y) {
                            var n = e ? ee : Bt;
                            t > 0 && (n = n.filter((function (e) {
                                return e.level === t
                            }))), 0 !== n.length ? (Ma(), n.forEach((function (e) {
                                "\u517c\u804c" === e.workname ? St.MiningContract.methods.quitWork(e.token_id).send({from: y}).then((function () {
                                    return Aa(y)
                                })).catch((function (e) {
                                    return console.log(e)
                                })) : St.NewMiningContract.methods.quitWork(e.token_id).send({from: y}).then((function () {
                                    return Aa(y)
                                })).catch((function (e) {
                                    return console.log(e)
                                }))
                            }))) : D.b.error("\u4f60\u6ca1\u5361\u53ef\u4ee5\u9000\u51fa\u5de5\u4f5c")
                        } else D.b.error("\u8bf7\u91cd\u65b0\u5237\u65b0\u7f51\u9875")
                    }
                }, Pa = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return function () {
                        if (y) if (Ma(), 1 === t) {
                            var n = ee.filter((function (e) {
                                return "\u517c\u804c" === e.workname
                            }));
                            if (0 === n.length) return void D.b.error("\u4f60\u6ca1\u6709\u9ed1\u5974\u53ef\u6536");
                            n.forEach((function (e) {
                                St.MiningContract.methods.getAward(e.token_id).send({from: y}).then((function () {
                                    return Aa(y)
                                })).catch((function (e) {
                                    return console.log(e)
                                }))
                            }))
                        } else if (2 === t) {
                            var a = ee.filter((function (e) {
                                return "\u517c\u804c" !== e.workname
                            }));
                            if (0 === a.length) return void D.b.error("\u4f60\u6ca1\u6709\u5408\u683c\u53ef\u6536");
                            a.forEach((function (e) {
                                St.NewMiningContract.methods.getAward(e.token_id).send({from: y}).then((function () {
                                    return Aa(y)
                                })).catch((function (e) {
                                    return console.log(e)
                                }))
                            }))
                        } else (e ? ee : Bt).forEach((function (e) {
                            "\u517c\u804c" === e.workname ? St.MiningContract.methods.getAward(e.token_id).send({from: y}).then((function () {
                                return Aa(y)
                            })).catch((function (e) {
                                return console.log(e)
                            })) : St.NewMiningContract.methods.getAward(e.token_id).send({from: y}).then((function () {
                                return Aa(y)
                            })).catch((function (e) {
                                return console.log(e)
                            }))
                        })); else D.b.error("\u8bf7\u91cd\u65b0\u5237\u65b0\u7f51\u9875")
                    }
                }, Fa = function (e) {
                    return function () {
                        if (y) {
                            Ma();
                            var t = ee.filter((function (e) {
                                return "\u517c\u804c" !== e.workname
                            })).filter((function (t) {
                                return t.gold >= e
                            }));
                            0 !== t.length ? t.forEach((function (e) {
                                St.MiningContract.methods.getAward(e.token_id).send({from: y}).then((function () {
                                    return Aa(y)
                                })).catch((function (e) {
                                    return console.log(e)
                                }))
                            })) : D.b.error("\u4f60\u6ca1\u6709\u9ed1\u5974\u53ef\u6536")
                        } else D.b.error("\u8bf7\u91cd\u65b0\u5237\u65b0\u7f51\u9875")
                    }
                }, Ea = function () {
                    Ln(!0);
                    try {
                        fetch(je).then((function (e) {
                            return e.json()
                        })).then((function (e) {
                            var t = e.data.result.items;
                            m(t), Ia(t);
                            var n = t.filter((function (e) {
                                return parseInt(e.price) <= 44e16
                            }));
                            $t(n), Ln(!1)
                        })).catch((function (e) {
                            console.log(e)
                        }))
                    } catch (e) {
                        console.log(e), Ln(!1)
                    }
                }, Da = function (e) {
                    Ea(), Dt(e), Kt(Date.now() + 1e3 * e * 60)
                };
                return Object(fe.jsxs)(tt, {
                    children: [Object(fe.jsx)(nt, {
                        children: Object(fe.jsxs)(at, {
                            children: [Object(fe.jsx)("img", {
                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD7ElEQVR4nO2azU8TQRiHe/E/MGLq0i5+dAutLRIryIds7YellogaCRE0ikbjwSjxoCcPHvRKaiTERIxEo/KlbaFQamwjBVGT3S0YjUZUMHpATSOa6G28Tt/ZhA2ClvhO8lx+eWdm59nJwG5Xp1NpBt5MaPJ54SnMDEZhVK3vv2gGozDKXLNReAszvd60UtuAKAAFoAAUQGEvLlHItyihyUz3SCqiQku8Vl0+L4TgvImWcolcdhGaA6J9BgWgABSwdAK+f+yRbLYimaZyq6WT480izSrDugqY6fXaMrW+5aWWTjivcr5CRYBtaQWQTK9CpmoJzewz/ySzKwymEZhxRiGpJVPr29VWPQnnJXc9yl/fASgABaAARkBG8qdthUUyTbWjMAIPLVeFJQzrPGWWMKzzVFn7YV2y05nWJuAfHILkZYC5ENLtSTJ1o77kgutG/ey8ubIDUAAKWIYCON5cDbEXlyg0dXWeYZLpk7P4ei2eMwIi3jhpd8k0Lbs3peAButpo8sO1MnfbwJuJprs9FcidHaB2LSq7Qm2tKAAFoIBFFPA6IJHb7lAWIzVRpk6pGSI9nkQWI74hpi7tjzLjKX45dwVMBdj/098EJJWMvdvqGdtXbQ4UgAJQQE4I+PUykI7fdKZonoXdWhfLZJ/GfQk43szYDvZxOFcEfJX8ChzrxMHNCxYQ6RCZlySxTmfu/hlEASgABaAAFIACUMD/K+Dni50TZ447JJqB62IK1n0Y80YjHWKSZvz+9gFY9+qhJwXHe5P0TuSsAK3PAoM3xDic8/TRzexL1uX2LIACUMAyFAA/QVmztnBn8+G9Cs3RQ3UJMhtMZfGlLUI+X5GzmLk0SO57x7O45wqTLk+KZrbN2Rs7VS7TvLpY2QvrSK8rzIzX5WXGI93uEMwuNJb0H3EXyzRwrRxvFplfivR600poae0G61tmV8xF00z26fY48xY3uP0Rk112JTRlqn2danOkYeZzWJ8wd1tLQwEo4D8XoNPpVsCDwm4v2dPUuEumaWyojcHDsqneN9Ak2mWa+kprGGYN2zaGml3FCk3DNksI1u2rsjFZfZW1nx3PGoOZw2KunffA09r0BYIAbeYbhAmYcbyJsb7YH0mpz8Fei75AEBa8YBSAAlBAVsvj+FKOF2SayrqaoY7pYZnmwvNb4f3vWuUs3gclmJ17fLUvNvxApjk71t6npW/ZneMPtnQfm6YpcDmG4fXlcXzpogngeLMIDbub9kldc48JTeu3wdShzFUyH8EfsTgBLfgjFtfSt2LwZKosfILQrK8pZz7d/6NTHwWgABQwr4A/IZ83Myf+YoMCUAAKQAFa1vYbwMGeJdYrDtQAAAAASUVORK5CYII=",
                                style: {width: 40, height: 40}
                            }), Object(fe.jsx)(it, {children: "\u5de5\u5177\u732b"}), Object(fe.jsxs)(ut, {
                                children: [Object(fe.jsx)(pt, {
                                    type: "primary",
                                    style: {width: 100, padding: 0},
                                    danger: !0,
                                    onClick: Na(.055),
                                    children: "\u6253\u8d4f0.05BNB"
                                }), Object(fe.jsx)(pt, {
                                    type: "primary",
                                    style: {width: 100, padding: 0},
                                    danger: !0,
                                    onClick: Na(.118),
                                    children: "\u6253\u8d4f0.1BNB"
                                }), Object(fe.jsx)(pt, {
                                    type: "primary",
                                    style: {width: 100, padding: 0},
                                    danger: !0,
                                    onClick: Na(.55),
                                    children: "\u6253\u8d4f0.5BNB"
                                })]
                            })]
                        })
                    }), Object(fe.jsxs)(st, {
                        children: [Object(fe.jsx)(z.a, {
                            message: "\u9047\u89c1\u6570\u636e\u4e0d\u663e\u793a\u7684\u60c5\u51b5, \u8bf7\u5207\u6362\u4f60\u79d1\u5b66\u7684\u8282\u70b9, \u5b98\u65b9\u5c4f\u853d\u4e86\u90e8\u5206\u533a\u57df",
                            type: "warning",
                            closable: !0
                        }), Object(fe.jsx)(yt, {
                            children: Object(fe.jsxs)(ot, {
                                children: [Object(fe.jsx)("h3", {
                                    id: "menu1",
                                    children: "\u5f53\u524d\u94b1\u5305"
                                }), y, Object(fe.jsxs)(L.b, {
                                    children: [Object(fe.jsxs)("p", {
                                        style: {fontWeight: "bold"},
                                        children: ["BNX\u4f59\u989d: ", Rt]
                                    }), Object(fe.jsxs)("p", {
                                        style: {fontWeight: "bold"},
                                        children: ["Gold\u4f59\u989d: ", Gt]
                                    })]
                                })]
                            })
                        }), Object(fe.jsxs)(yt, {
                            children: [Object(fe.jsxs)(ot, {
                                children: [Object(fe.jsx)("h3", {
                                    id: "menu2",
                                    children: "\u6211\u7684\u82f1\u96c4"
                                }), Object(fe.jsx)("span", {children: "\u76ee\u524d\u53ea\u9488\u5bf9\u517c\u804c, \u4f10\u6728, \u6253\u730e, \u6284\u5f55, \u917f\u9152, \u7687\u5ba4\u4ee5\u4e0a\u8bf7\u53bb\u5b98\u7f51\u64cd\u4f5c"}), Object(fe.jsxs)(rt, {
                                    children: [Object(fe.jsx)(R.a, {
                                        placeholder: "\u9700\u8981\u8f6c\u79fb\u5361\u7684\u5730\u5740",
                                        style: {width: 200, height: 30},
                                        onChange: function (e) {
                                            return ta(e.target.value)
                                        }
                                    }), Object(fe.jsx)(W.a, {
                                        placement: "rightBottom",
                                        title: "\u8bf7\u786e\u8ba4\u4f60\u662f\u5426\u5c06\u4f60\u7684\u5361\u7247\u8f6c\u79fb\u5230".concat(ea, "\u8fd9\u4e2a\u5730\u5740\u4e0b"),
                                        onConfirm: function () {
                                            y ? "" !== ea ? 0 !== kt.length ? (Ma(), kt.forEach((function (e) {
                                                var t;
                                                switch (e.career_address) {
                                                    case Me:
                                                        t = St.WarriorContract;
                                                        break;
                                                    case ve:
                                                        t = St.RobberContract;
                                                        break;
                                                    case Oe:
                                                        t = St.MageContract;
                                                        break;
                                                    case Ae:
                                                        t = St.youxiaContract
                                                }
                                                t.methods.transferFrom(y, ea, e.token_id).send({from: y}).then((function () {
                                                    return ka(y)
                                                })).catch((function (e) {
                                                    return console.log(e)
                                                }))
                                            }))) : D.b.info("\u8bf7\u9009\u62e9\u4f60\u8981\u8f6c\u79fb\u7684\u5361") : D.b.info("\u5730\u5740\u4e0d\u80fd\u4e3a\u7a7a") : D.b.error("\u8bf7\u91cd\u65b0\u5237\u65b0\u7f51\u9875")
                                        },
                                        okText: "\u786e\u8ba4\u8f6c\u79fb",
                                        cancelText: "\u518d\u60f3\u60f3",
                                        children: Object(fe.jsx)(pt, {
                                            type: "primary",
                                            size: "middle",
                                            children: "\u8f6c\u79fb"
                                        })
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary",
                                        size: "middle",
                                        disabled: !un,
                                        onClick: function () {
                                            y ? (Ma(), kt.forEach((function (e) {
                                                St.MiningContract.methods.work(Ue, e.token_id).send({from: y}).then((function () {
                                                    return ka(y)
                                                })).catch((function (e) {
                                                    return console.log(e)
                                                }))
                                            }))) : D.b.error("\u8bf7\u91cd\u65b0\u5237\u65b0\u7f51\u9875")
                                        },
                                        children: "\u517c\u804c\u5de5\u4f5c"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary",
                                        size: "middle",
                                        disabled: !dn,
                                        onClick: function () {
                                            y ? (D.b.error("\u7cfb\u7edf\u5c06\u81ea\u52a8\u5206\u6d3e\u53c2\u4e0e\u7b26\u5408\u5de5\u4f5c\u7684\u5361, \u8bf7\u6ce8\u610f, GAS\u8fc7\u9ad8\u8981\u62d2\u7edd\u64cd\u4f5c", 2), D.b.error("GAS\u8fc7\u9ad8\u7684\u539f\u56e0\u53ef\u80fd\u9700\u8981\u5b98\u65b9\u6316\u77ff\u6388\u6743\u64cd\u4f5c", 2), Ma(), kt.forEach((function (e) {
                                                var t = "";
                                                switch (e.career_address) {
                                                    case Oe:
                                                        t = Ve;
                                                        break;
                                                    case Ae:
                                                        t = Ke;
                                                        break;
                                                    case Me:
                                                        t = Ye;
                                                        break;
                                                    case ve:
                                                        t = qe
                                                }
                                                St.NewMiningContract.methods.work(t, e.token_id).send({from: y}).then((function () {
                                                    return ka(y)
                                                })).catch((function (e) {
                                                    return console.log(e)
                                                }))
                                            }))) : D.b.error("\u8bf7\u91cd\u65b0\u5237\u65b0\u7f51\u9875")
                                        },
                                        children: "2\u7ea7\u5de5\u4f5c"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary", size: "middle", onClick: function () {
                                            return ka(y)
                                        }, children: "\u5237\u65b0"
                                    })]
                                }), kt.length > 0 ? Object(fe.jsx)(rt, {children: Object(fe.jsxs)("p", {children: ["\u5df2\u9009\u4e2d: ", kt.length]})}) : Object(fe.jsx)(fe.Fragment, {})]
                            }), Object(fe.jsx)(dt, {
                                loading: Tn,
                                rowKey: function (e) {
                                    return e.token_id
                                },
                                rowSelection: {
                                    selectedRows: kt, onChange: function (e, t) {
                                        rn(t.length > 0);
                                        var n = t.filter((function (e) {
                                            var t = !1;
                                            switch (e.career_address) {
                                                case ve:
                                                    t = bt(e, ve, "agility", "strength") && e.level > 1;
                                                case Ae:
                                                    t = bt(e, Ae, "strength", "agility") && e.level > 1;
                                                case Me:
                                                    t = bt(e, Me, "strength", "physique") && e.level > 1;
                                                case Oe:
                                                    t = bt(e, Oe, "brains", "charm") && e.level > 1
                                            }
                                            return !1 === t
                                        }));
                                        console.log(t), t.length > 0 ? on(0 !== n.length) : on(!1), _t(t)
                                    }
                                },
                                bordered: !1,
                                pagination: !1,
                                columns: [].concat(Object(h.a)(ct() ? [] : vt), Mt, Object(h.a)(ct() ? wt : gt), Object(h.a)(ct() ? [] : xa)),
                                onRow: function (e) {
                                    return {
                                        onClick: function () {
                                            Xn(e), qn(ct())
                                        }, onMouseEnter: function () {
                                            Xn(e)
                                        }
                                    }
                                },
                                dataSource: H,
                                size: "small"
                            })]
                        }), Object(fe.jsxs)(yt, {
                            children: [Object(fe.jsxs)(ot, {
                                children: [Object(fe.jsx)("h3", {
                                    id: "menu3",
                                    children: "\u65e5\u5e38\u6316\u77ff"
                                }), Object(fe.jsx)("span", {children: "\u76ee\u524d\u53ea\u9488\u5bf9\u517c\u804c, \u4f10\u6728, \u6253\u730e, \u6284\u5f55, \u917f\u9152, \u7687\u5ba4\u4ee5\u4e0a\u8bf7\u53bb\u5b98\u7f51\u64cd\u4f5c"}), Object(fe.jsxs)(rt, {
                                    children: [Object(fe.jsx)(pt, {
                                        type: "primary",
                                        size: "middle",
                                        disabled: !mn,
                                        onClick: Pa(!1),
                                        children: "\u6536\u83dc"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary",
                                        size: "middle",
                                        disabled: !mn,
                                        onClick: Sa(!1),
                                        children: "\u8f9e\u804c"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary",
                                        size: "middle",
                                        onClick: Pa(!0, 1),
                                        children: "\u6536\u5168\u9ed1"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary",
                                        size: "middle",
                                        onClick: Fa(2e3),
                                        children: "\u9ed1\u6ee12000"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary",
                                        size: "middle",
                                        onClick: Fa(3e3),
                                        children: "\u9ed1\u6ee13000"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary",
                                        size: "middle",
                                        onClick: Fa(4e3),
                                        children: "\u9ed1\u6ee14000"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary",
                                        size: "middle",
                                        onClick: Pa(!0, 2),
                                        children: "\u6536\u5168\u5408\u683c"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary",
                                        size: "middle",
                                        onClick: Pa(!0),
                                        children: "\u6536\u5168\u90e8"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary",
                                        size: "middle",
                                        onClick: Sa(!0, 2),
                                        children: "Lv2\u8f9e\u804c"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary",
                                        size: "middle",
                                        onClick: Sa(!0, 3),
                                        children: "Lv3\u8f9e\u804c"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary",
                                        size: "middle",
                                        onClick: Sa(!0, 4),
                                        children: "Lv4\u8f9e\u804c"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary",
                                        size: "middle",
                                        onClick: Sa(!0, 5),
                                        children: "Lv5\u8f9e\u804c"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary",
                                        size: "middle",
                                        onClick: Sa(!0),
                                        children: "\u5168\u90e8\u8f9e\u804c"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary", size: "middle", onClick: function () {
                                            return Aa(y)
                                        }, children: "\u5237\u65b0"
                                    })]
                                }), Bt.length > 0 ? Object(fe.jsx)(rt, {children: Object(fe.jsxs)("p", {children: ["\u5df2\u9009\u4e2d: ", Bt.length]})}) : Object(fe.jsx)(fe.Fragment, {}), Object(fe.jsxs)(L.b, {children: [Object(fe.jsxs)("p", {children: ["\u6316\u77ff\u5361\u7247\u6570\u91cf:", ee.length]}), Object(fe.jsxs)("p", {children: ["\u6bcf\u65e5\u9884\u8ba1\u6536\u76ca:", In]}), Object(fe.jsxs)("p", {children: ["\u6316\u77ff\u603b\u6536\u76ca: ", An.toFixed(2)]})]})]
                            }), Object(fe.jsx)(dt, {
                                loading: jn,
                                rowKey: function (e) {
                                    return e.token_id
                                },
                                rowSelection: {
                                    selectedRows: Bt, onChange: function (e, t) {
                                        bn(t.length > 0), Nt(t)
                                    }
                                },
                                onRow: function (e) {
                                    return {
                                        onClick: function () {
                                            Xn(e), qn(ct())
                                        }, onMouseEnter: function () {
                                            Xn(e)
                                        }
                                    }
                                },
                                bordered: !1,
                                columns: [].concat(Object(h.a)(ct() ? [] : vt), Mt, Object(h.a)(ct() ? wt : gt), ft, Object(h.a)(ct() ? [] : xa)),
                                dataSource: ee,
                                size: "small"
                            })]
                        }), Object(fe.jsxs)(yt, {
                            children: [Object(fe.jsxs)(ot, {
                                children: [Object(fe.jsxs)(rt, {
                                    children: [Object(fe.jsx)("h3", {
                                        id: "menu4",
                                        children: "\u526f\u672c\u8bb0\u5f55"
                                    }), Object(fe.jsx)(pt, {
                                        loading: Qn,
                                        shape: "circle",
                                        type: "primary",
                                        onClick: Ta(y),
                                        icon: Object(fe.jsx)(I.a, {})
                                    })]
                                }), Object(fe.jsx)("p", {
                                    style: {marginTop: 4},
                                    children: Object(fe.jsxs)(L.b, {
                                        children: [Object(fe.jsxs)(E.a, {
                                            color: "#55acee",
                                            children: ["\u5192\u9669\u6b21\u6570 ", pa.num]
                                        }), Object(fe.jsxs)(E.a, {
                                            color: "#cd201f",
                                            children: ["\u6d88\u8017BNX ", pa.bnx]
                                        }), Object(fe.jsxs)(E.a, {
                                            color: "#3b5999",
                                            children: ["\u6d88\u8017\u91d1\u5e01 ", pa.gold]
                                        })]
                                    })
                                }), Object(fe.jsx)("p", {
                                    style: {marginTop: 5},
                                    children: Object(fe.jsxs)(L.b, {
                                        children: [Object(fe.jsx)("p", {children: "\u53ef\u9886"}), Object(fe.jsxs)(E.a, {
                                            color: "red",
                                            children: ["BNX ", ia.coin.toFixed(4)]
                                        }), Object(fe.jsxs)(E.a, {
                                            color: "green",
                                            children: ["\u91d1\u5e01 ", ia.money]
                                        }), Object(fe.jsxs)(E.a, {color: "gold", children: ["\u94a5\u5319 ", ia.coupon]})]
                                    })
                                }), Object(fe.jsx)("p", {
                                    style: {marginTop: 5},
                                    children: Object(fe.jsxs)(L.b, {
                                        children: [Object(fe.jsx)("p", {children: "\u5df2\u9886"}), Object(fe.jsxs)(E.a, {
                                            color: "red",
                                            children: ["BNX ", pa.coin.toFixed(4)]
                                        }), Object(fe.jsxs)(E.a, {
                                            color: "green",
                                            children: ["\u91d1\u5e01 ", pa.money]
                                        }), Object(fe.jsxs)(E.a, {color: "gold", children: ["\u94a5\u5319 ", pa.coupon]})]
                                    })
                                }), Object(fe.jsx)("p", {
                                    style: {marginTop: 5},
                                    children: "\u6536\u76ca\u6309\u71671BNX=15000Gold\u8ba1\u7b97, \u94a5\u5319\u4e0d\u53c2\u4e0e\u8ba1\u7b97, \u53ea\u662f\u9884\u8ba1\u5927\u6982\u7684\u6536\u76ca, \u5982\u6709\u51fa\u5165, \u90fd\u662f\u6211\u7684\u95ee\u9898"
                                })]
                            }), Object(fe.jsx)(dt, {
                                loading: Qn, rowKey: function (e) {
                                    return e.uuid
                                }, bordered: !1, columns: ct() ? Tt : xt, dataSource: la, size: "small"
                            })]
                        }), Object(fe.jsxs)(yt, {
                            children: [Object(fe.jsxs)(ot, {
                                children: [Object(fe.jsx)("h3", {
                                    id: "menu5",
                                    children: "\u5361\u7247\u7b5b\u9009"
                                }), ct() ? Object(fe.jsx)(fe.Fragment, {}) : Object(fe.jsx)(Q.a, {
                                    onChange: function (e) {
                                        Fn(e)
                                    },
                                    checkedChildren: "\u7b80\u6d01\u641c\u7d22",
                                    unCheckedChildren: "\u7b80\u6d01\u641c\u7d22",
                                    style: {margin: 10}
                                }), Object(fe.jsxs)(J.a, {
                                    onFinish: function (e) {
                                        var t = c.filter((function (t) {
                                            return "\u5168\u90e8\u804c\u4e1a" === e.zy || t.career_address == e.zy
                                        })).filter((function (t) {
                                            return "\u5168\u90e8\u7b49\u7ea7" === e.dj || t.level == e.dj
                                        })).filter((function (t) {
                                            return Pn ? Ba("\u5168\u90e8\u804c\u4e1a" === e.zy ? t.career_address : e.zy, t, e.m, e.c) : t.strength >= e.m && t.agility >= e.c && t.physique >= e.t3 && t.volition >= e.t4 && t.brains >= e.t5 && t.charm >= e.t6
                                        }));
                                        B(t)
                                    },
                                    layout: "inline",
                                    style: {alignItems: "center"},
                                    initialValues: {
                                        dj: "\u5168\u90e8\u7b49\u7ea7",
                                        zy: "\u5168\u90e8\u804c\u4e1a",
                                        m: 50,
                                        c: 50,
                                        t3: 50,
                                        t4: 50,
                                        t5: 50,
                                        t6: 50
                                    },
                                    children: [Object(fe.jsx)(J.a.Item, {
                                        name: "zy",
                                        label: "\u804c\u4e1a",
                                        children: Object(fe.jsxs)(S.a, {
                                            name: "zy",
                                            style: {width: 75},
                                            children: [Object(fe.jsx)(ge, {
                                                value: "\u5168\u90e8\u804c\u4e1a",
                                                children: "\u804c\u4e1a"
                                            }), Object(fe.jsx)(ge, {
                                                value: ve,
                                                children: et[ve]
                                            }), Object(fe.jsx)(ge, {
                                                value: Me,
                                                children: et[Me]
                                            }), Object(fe.jsx)(ge, {
                                                value: Oe,
                                                children: et[Oe]
                                            }), Object(fe.jsx)(ge, {value: Ae, children: et[Ae]})]
                                        })
                                    }), Object(fe.jsx)(J.a.Item, {
                                        name: "dj",
                                        label: "\u7b49\u7ea7",
                                        children: Object(fe.jsxs)(S.a, {
                                            name: "dj",
                                            style: {width: 75},
                                            children: [Object(fe.jsx)(ge, {
                                                value: "\u5168\u90e8\u7b49\u7ea7",
                                                children: "\u7b49\u7ea7"
                                            }), Object(fe.jsx)(ge, {
                                                value: "1",
                                                children: "L1"
                                            }), Object(fe.jsx)(ge, {
                                                value: "2",
                                                children: "L2"
                                            }), Object(fe.jsx)(ge, {
                                                value: "3",
                                                children: "L3"
                                            }), Object(fe.jsx)(ge, {
                                                value: "4",
                                                children: "L4"
                                            }), Object(fe.jsx)(ge, {
                                                value: "5",
                                                children: "L5"
                                            }), Object(fe.jsx)(ge, {
                                                value: "6",
                                                children: "L6"
                                            }), Object(fe.jsx)(ge, {
                                                value: "7",
                                                children: "L7"
                                            }), Object(fe.jsx)(ge, {
                                                value: "8",
                                                children: "L8"
                                            }), Object(fe.jsx)(ge, {
                                                value: "9",
                                                children: "L9"
                                            }), Object(fe.jsx)(ge, {value: "10", children: "L10"})]
                                        })
                                    }), Pn || ct() ? Object(fe.jsxs)(fe.Fragment, {
                                        children: [Object(fe.jsx)(J.a.Item, {
                                            name: "m",
                                            label: "\u4e3b\u5c5e\u6027",
                                            children: Object(fe.jsx)(G.a, {
                                                name: "m",
                                                min: 0,
                                                max: 100,
                                                size: "middle",
                                                style: {width: 60}
                                            })
                                        }), Object(fe.jsx)(J.a.Item, {
                                            name: "c",
                                            label: "\u9644\u5c5e\u6027",
                                            children: Object(fe.jsx)(G.a, {
                                                name: "c",
                                                min: 0,
                                                max: 100,
                                                size: "middle",
                                                style: {width: 60}
                                            })
                                        })]
                                    }) : Object(fe.jsxs)(fe.Fragment, {
                                        children: [Object(fe.jsx)(J.a.Item, {
                                            name: "m",
                                            label: "\u529b\u91cf",
                                            children: Object(fe.jsx)(G.a, {
                                                name: "m",
                                                min: 0,
                                                max: 100,
                                                size: "middle",
                                                style: {width: 60}
                                            })
                                        }), Object(fe.jsx)(J.a.Item, {
                                            name: "c",
                                            label: "\u654f\u6377",
                                            children: Object(fe.jsx)(G.a, {
                                                name: "c",
                                                min: 0,
                                                max: 100,
                                                size: "middle",
                                                style: {width: 60}
                                            })
                                        }), Object(fe.jsx)(J.a.Item, {
                                            name: "t3",
                                            label: "\u4f53\u8d28",
                                            children: Object(fe.jsx)(G.a, {
                                                name: "t3",
                                                min: 0,
                                                max: 100,
                                                size: "middle",
                                                style: {width: 60}
                                            })
                                        }), Object(fe.jsx)(J.a.Item, {
                                            name: "t4",
                                            label: "\u610f\u5fd7",
                                            children: Object(fe.jsx)(G.a, {
                                                name: "t4",
                                                min: 0,
                                                max: 100,
                                                size: "middle",
                                                style: {width: 60}
                                            })
                                        }), Object(fe.jsx)(J.a.Item, {
                                            name: "t5",
                                            label: "\u667a\u529b",
                                            children: Object(fe.jsx)(G.a, {
                                                name: "t5",
                                                min: 0,
                                                max: 100,
                                                size: "middle",
                                                style: {width: 60}
                                            })
                                        }), Object(fe.jsx)(J.a.Item, {
                                            name: "t6",
                                            label: "\u7cbe\u795e",
                                            children: Object(fe.jsx)(G.a, {
                                                name: "t6",
                                                min: 0,
                                                max: 100,
                                                size: "middle",
                                                style: {width: 60}
                                            })
                                        })]
                                    }), Object(fe.jsx)(J.a.Item, {
                                        children: Object(fe.jsx)(P.a, {
                                            type: "primary",
                                            htmlType: "submit",
                                            style: {margin: "0 10px"},
                                            children: "\u641c\u7d22"
                                        })
                                    })]
                                })]
                            }), Object(fe.jsx)(dt, {
                                rowKey: function (e) {
                                    return e.career_address
                                },
                                bordered: !1,
                                columns: [].concat(Object(h.a)(ct() ? [] : vt), Object(h.a)(ct() ? wt : gt), ht, jt),
                                onRow: function (e) {
                                    return {
                                        onClick: function () {
                                            Xn(e), qn(ct())
                                        }, onMouseEnter: function () {
                                            Xn(e)
                                        }
                                    }
                                },
                                dataSource: C,
                                size: "small"
                            })]
                        }), Object(fe.jsxs)(yt, {
                            children: [Object(fe.jsxs)(ot, {
                                children: [Object(fe.jsx)("h3", {
                                    id: "menu6",
                                    children: "\u6361\u6f0f\u533a\u57df"
                                }), Object(fe.jsx)("p", {children: "\u4ef7\u683c\u4f4e\u4e8e0.44bnx\u7684\u9ed1\u5361"}), Object(fe.jsxs)(rt, {
                                    children: [Object(fe.jsx)(pt, {
                                        type: "primary",
                                        onClick: Ea,
                                        children: "\u624b\u52a8\u626b\u63cf"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary", onClick: function () {
                                            return Da(10)
                                        }, children: "10\u5206\u949f\u626b\u63cf"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary", onClick: function () {
                                            return Da(5)
                                        }, children: "5\u5206\u949f\u626b\u63cf"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary", onClick: function () {
                                            return Da(2)
                                        }, children: "2\u5206\u949f\u626b\u63cf"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary", onClick: function () {
                                            return Da(1)
                                        }, children: "1\u5206\u949f\u626b\u63cf"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary", onClick: function () {
                                            return Da(.5)
                                        }, children: "30\u79d2\u626b\u63cf"
                                    }), Object(fe.jsx)(pt, {
                                        type: "primary", onClick: function () {
                                            return Da(.17)
                                        }, children: "10\u79d2\u626b\u63cf"
                                    })]
                                }), Object(fe.jsx)(xe, {
                                    title: "\u5f53\u524d\u81ea\u52a8\u5237\u65b0\u4e2d, \u79bb\u4e0b\u4e00\u6b21\u5237\u65b0\u8fd8\u6709",
                                    value: Vt,
                                    format: "mm\u5206ss\u79d2SSS\u6beb\u79d2",
                                    onFinish: function () {
                                        Da(Et)
                                    }
                                })]
                            }), Object(fe.jsx)(dt, {
                                onRow: function (e) {
                                    return {
                                        onClick: function () {
                                            Xn(e), qn(ct())
                                        }, onMouseEnter: function () {
                                            Xn(e)
                                        }
                                    }
                                },
                                rowKey: function (e) {
                                    return e.order_id
                                },
                                bordered: !1,
                                loading: zn,
                                columns: [].concat(Object(h.a)(ct() ? [] : vt), Object(h.a)(ct() ? wt : gt), ht, jt),
                                pagination: !1,
                                dataSource: Zt,
                                size: "small"
                            })]
                        }), Object(fe.jsxs)(yt, {
                            children: [Object(fe.jsx)(ot, {
                                children: Object(fe.jsx)("h3", {
                                    id: "menu7",
                                    children: "\u5408\u683c\u5361\u5730\u677f\u4ef7"
                                })
                            }), Object(fe.jsx)(dt, {
                                onRow: function (e) {
                                    return {
                                        onClick: function () {
                                            Xn(e), qn(ct())
                                        }, onMouseEnter: function () {
                                            Xn(e)
                                        }
                                    }
                                },
                                rowKey: function (e) {
                                    return e.order_id
                                },
                                bordered: !1,
                                columns: [].concat(Object(h.a)(ct() ? [] : vt), Object(h.a)(ct() ? wt : gt), ht, jt),
                                pagination: !1,
                                dataSource: T,
                                size: "small"
                            })]
                        })]
                    }), Object(fe.jsxs)(N.a, {
                        targetOffset: 100,
                        style: {
                            position: "fixed",
                            visibility: ct() ? "hidden" : "visible",
                            zIndex: 100,
                            top: 0,
                            left: 10,
                            marginTop: 100
                        },
                        children: [Object(fe.jsx)(Te, {
                            href: "#menu1",
                            title: "\u5f53\u524d\u94b1\u5305"
                        }), Object(fe.jsx)(Te, {
                            href: "#menu2",
                            title: "\u6211\u7684\u82f1\u96c4"
                        }), Object(fe.jsx)(Te, {
                            href: "#menu3",
                            title: "\u65e5\u5e38\u6316\u77ff"
                        }), Object(fe.jsx)(Te, {
                            href: "#menu4",
                            title: "\u526f\u672c\u8bb0\u5f55"
                        }), Object(fe.jsx)(Te, {
                            href: "#menu5",
                            title: "\u5361\u7247\u7b5b\u9009"
                        }), Object(fe.jsx)(Te, {href: "#menu6", title: "\u6361\u6f0f"}), Object(fe.jsx)(Te, {
                            href: "#menu7",
                            title: "\u5408\u683c\u5361\u5730\u677f\u4ef7"
                        })]
                    }), Object(fe.jsx)(U.a, {}), Hn.token_id ? Object(fe.jsx)(Y.a, (e = {
                        title: "Basic Modal",
                        visible: Yn
                    }, Object(_.a)(e, "title", "".concat(et[Hn.career_address], " Lv ").concat(Hn.level)), Object(_.a)(e, "centered", !0), Object(_.a)(e, "maskClosable", !0), Object(_.a)(e, "cancelText", "\u5173\u95ed"), Object(_.a)(e, "closable", !1), Object(_.a)(e, "destroyOnClose", !0), Object(_.a)(e, "footer", [Object(fe.jsx)(P.a, {
                        onClick: function () {
                            return qn(!1)
                        }, children: "\u5173\u95ed"
                    })]), Object(_.a)(e, "onCancel", (function () {
                        return qn(!1)
                    })), Object(_.a)(e, "children", Object(fe.jsxs)("div", {
                        style: {display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"},
                        children: [Object(fe.jsx)("img", {
                            src: lt(Hn.career_address),
                            style: {width: 200, height: 200}
                        }), Object(fe.jsxs)("div", {
                            style: {flex: 1, width: "90%"},
                            children: [Object(fe.jsxs)("p", {children: ["NFT\u5730\u5740: ", Hn.token_id.substr(0, 10), "***", Hn.token_id.substr(-10, 10)]}), Object(fe.jsxs)("p", {
                                style: {fontWeight: "bold"},
                                children: ["\u603b\u5c5e\u6027:", " ", Hn.strength + Hn.agility + Hn.physique + Hn.volition + Hn.brains + Hn.charm]
                            }), Object(fe.jsx)(q.a, {
                                status: "exception",
                                percent: Hn.strength,
                                size: "small",
                                format: function (e) {
                                    return "\u529b\u91cf ".concat(e)
                                }
                            }), Object(fe.jsx)(q.a, {
                                status: "exception",
                                percent: Hn.agility,
                                size: "small",
                                format: function (e) {
                                    return "\u654f\u6377 ".concat(e)
                                }
                            }), Object(fe.jsx)(q.a, {
                                status: "exception",
                                percent: Hn.physique,
                                size: "small",
                                format: function (e) {
                                    return "\u4f53\u8d28 ".concat(e)
                                }
                            }), Object(fe.jsx)(q.a, {
                                status: "exception",
                                percent: Hn.volition,
                                size: "small",
                                format: function (e) {
                                    return "\u610f\u5fd7 ".concat(e)
                                }
                            }), Object(fe.jsx)(q.a, {
                                status: "exception",
                                percent: Hn.brains,
                                size: "small",
                                format: function (e) {
                                    return "\u667a\u529b ".concat(e)
                                }
                            }), Object(fe.jsx)(q.a, {
                                status: "exception",
                                percent: Hn.charm,
                                size: "small",
                                format: function (e) {
                                    return "\u7cbe\u795e ".concat(e)
                                }
                            })]
                        })]
                    })), e)) : Object(fe.jsx)(fe.Fragment, {})]
                })
            };
        T.a.render(Object(fe.jsx)(f.a.StrictMode, {children: Object(fe.jsx)(w.MetamaskStateProvider, {children: Object(fe.jsx)(Ot, {})})}), document.getElementById("root")), g()
    }
}, [[763, 1, 2]]]);
