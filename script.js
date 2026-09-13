const timezones = [
    {
        id: "Etc/GMT+12",
        city: "the Pacific Ocean",
        type: "ocean",
        img: "https://images.unsplash.com/photo-1701789223372-dba1efcdbb4d?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1701789223372-dba1efcdbb4d?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1468413253725-0d5181091126?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1476514525535-ce74d4526f6d?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Pacific/Pago_Pago",
        city: "Pago Pago",
        type: "city",
        img: "https://images.unsplash.com/photo-1544918877-460635b6d13e?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1544918877-460635b6d13e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1559128010-7c2288716768?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Pacific/Honolulu",
        city: "Honolulu",
        type: "city",
        img: "https://images.unsplash.com/photo-1507876466758-bc54f384809c?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1507876466758-bc54f384809c?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1505852679233-d9fd70aff968?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1563299796-17596ed6b017?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1589553460732-58ef7a114798?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1579606032824-3453880343a4?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "America/Anchorage",
        city: "Anchorage",
        type: "city",
        img: "https://images.unsplash.com/photo-1704243962389-6e57197ccf09?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1704243962389-6e57197ccf09?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1520637691905-2b4967399eb2?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "America/Los_Angeles",
        city: "Los Angeles",
        type: "city",
        img: "https://images.unsplash.com/photo-1549041050-386c1c99d655?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1549041050-386c1c99d655?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1515896769750-31548aa180ed?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "America/Denver",
        city: "Denver",
        type: "city",
        img: "https://images.unsplash.com/photo-1587096085496-2d0e48bc8ac1?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1587096085496-2d0e48bc8ac1?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1546156929-a4c0ac411f47?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1600298882283-40b4dcb8b211?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "America/Chicago",
        city: "Chicago",
        type: "city",
        img: "https://images.unsplash.com/photo-1714662660476-022bfd34cf44?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1714662660476-022bfd34cf44?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1477959858617-67f30ac72604?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "America/New_York",
        city: "New York",
        type: "city",
        img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1546436836-07a91091f160?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1522083165192-3ccb2d424e98?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "America/Santiago",
        city: "Santiago",
        type: "city",
        img: "https://images.unsplash.com/photo-1689850543263-01a52ccc6943?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1689850543263-01a52ccc6943?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1534067783941-51c9849cfe83?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "America/Sao_Paulo",
        city: "Rio de Janeiro",
        type: "city",
        img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Atlantic/South_Georgia",
        city: "the Atlantic Ocean",
        type: "ocean",
        img: "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1468413253725-0d5181091126?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1476514525535-ce74d4526f6d?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1701789223372-dba1efcdbb4d?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Atlantic/Cape_Verde",
        city: "Praia",
        type: "city",
        img: "https://images.unsplash.com/photo-1705608043808-000663d76a2a?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1705608043808-000663d76a2a?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1559128010-7c2288716768?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Europe/London",
        city: "London",
        type: "city",
        img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Europe/Paris",
        city: "Paris",
        type: "city",
        img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Africa/Cairo",
        city: "Cairo",
        type: "city",
        img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Europe/Moscow",
        city: "Moscow",
        type: "city",
        img: "https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1520106212299-d99c443e4568?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1513326718677-b964603b136b?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Asia/Dubai",
        city: "Dubai",
        type: "city",
        img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1578895210405-907db486c111?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Indian/Maldives",
        city: "the Indian Ocean",
        type: "ocean",
        img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1468413253725-0d5181091126?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1476514525535-ce74d4526f6d?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Asia/Kolkata",
        city: "Mumbai",
        type: "city",
        img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1595658658421-a9ac457190ae?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Asia/Dhaka",
        city: "Dhaka",
        type: "city",
        img: "https://images.unsplash.com/photo-1630987871777-f7b2d62894d0?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1630987871777-f7b2d62894d0?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1608958435020-e8a7109ba809?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1619177383944-78eb426e2f1e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Asia/Bangkok",
        city: "Bangkok",
        type: "city",
        img: "https://images.unsplash.com/photo-1568508432206-7541b535f84c?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1568508432206-7541b535f84c?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Asia/Singapore",
        city: "Singapore",
        type: "city",
        img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Asia/Tokyo",
        city: "Tokyo",
        type: "city",
        img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Australia/Sydney",
        city: "Sydney",
        type: "city",
        img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1523428096881-5bd79d04300f?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1549180030-48bf079fb38a?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1468413253725-0d5181091126?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1476514525535-ce74d4526f6d?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Pacific/Noumea",
        city: "the Pacific Ocean",
        type: "ocean",
        img: "https://images.unsplash.com/photo-1538864449744-583fe529e11c?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1538864449744-583fe529e11c?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1468413253725-0d5181091126?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1476514525535-ce74d4526f6d?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Pacific/Auckland",
        city: "Auckland",
        type: "city",
        img: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1701789223372-dba1efcdbb4d?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Pacific/Tongatapu",
        city: "Tonga",
        type: "city",
        img: "https://images.unsplash.com/photo-1586418233867-0c881fe58719?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1586418233867-0c881fe58719?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1559128010-7c2288716768?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    {
        id: "Pacific/Kiritimati",
        city: "Kiritimati",
        type: "city",
        img: "https://images.unsplash.com/photo-1667270234764-2b36bae86d27?auto=format&fit=crop&q=80&w=2000",
        imgs: [
            "https://images.unsplash.com/photo-1667270234764-2b36bae86d27?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1559128010-7c2288716768?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?auto=format&fit=crop&q=80&w=2000"
        ]
    }
];

function getLocalMinutes(timeZoneId) {
    const now = new Date();
    try {
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timeZoneId,
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
        });
        const parts = formatter.formatToParts(now);
        
        let hour = 0;
        let minute = 0;
        
        const hourPart = parts.find(p => p.type === 'hour');
        if (hourPart) {
            hour = parseInt(hourPart.value, 10) % 24;
        }
        
        const minutePart = parts.find(p => p.type === 'minute');
        if (minutePart) {
            minute = parseInt(minutePart.value, 10);
        }
        
        return hour * 60 + minute;
    } catch (e) {
        console.error("Error formatting time for TZ:", timeZoneId, e);
        return 0;
    }
}

function updateTime() {
    const targetMinutes = 17 * 60; // 5 PM

    let closestTz = null;
    let minDiff = Infinity;

    timezones.forEach(tz => {
        let localMinutes = getLocalMinutes(tz.id);

        let diff = Math.abs(localMinutes - targetMinutes);
        if (diff > 720) diff = 1440 - diff;

        if (diff < minDiff) {
            minDiff = diff;
            closestTz = tz;
        }
    });

    if (closestTz) {
        document.getElementById('city-name').textContent = closestTz.city;

        // Update almost status
        const timeStatus = document.getElementById('time-status');
        if (minDiff > 10) {
            timeStatus.textContent = "almost 5 PM";
        } else {
            timeStatus.textContent = "5 PM";
        }

        const bgImgElement = document.getElementById('background-image');

        // Select photo based on 5-minute interval blocks
        const photoList = (closestTz.imgs && closestTz.imgs.length > 0) ? closestTz.imgs : [closestTz.img];
        const FIVE_MINUTES_MS = 5 * 60 * 1000;
        const photoIndex = Math.floor(Date.now() / FIVE_MINUTES_MS) % photoList.length;
        const selectedImgUrl = photoList[photoIndex];

        const newCssBgUrl = `url("${selectedImgUrl}")`;
        if (bgImgElement.style.backgroundImage !== newCssBgUrl) {
            bgImgElement.style.backgroundImage = newCssBgUrl;
            
            // Preload next image in 5-minute rotation cycle
            const nextPhotoIndex = (photoIndex + 1) % photoList.length;
            const preloader = new Image();
            preloader.src = photoList[nextPhotoIndex];
        }

        document.getElementById('local-info').textContent = `Local time: ${formatLocalTime(closestTz.id)}`;
    }
}

function formatLocalTime(timeZoneId) {
    const now = new Date();
    try {
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timeZoneId,
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZoneName: 'short'
        });
        return formatter.format(now);
    } catch (e) {
        return "Unknown";
    }
}

// Ensure it runs once immediately
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateTime);
} else {
    updateTime();
}

// Check every 10 seconds to respond quickly to 5-minute image boundary changes
setInterval(updateTime, 10000);
