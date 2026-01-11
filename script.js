const timezones = [
    { offset: -12, city: "the Pacific Ocean", type: "ocean", img: "https://images.unsplash.com/photo-1701789223372-dba1efcdbb4d?auto=format&fit=crop&q=80&w=2000" },
    { offset: -11, city: "Pago Pago", type: "city", img: "https://images.unsplash.com/photo-1544918877-460635b6d13e?auto=format&fit=crop&q=80&w=2000" },
    { offset: -10, city: "Honolulu", type: "city", img: "https://images.unsplash.com/photo-1507876466758-bc54f384809c?auto=format&fit=crop&q=80&w=2000" },
    { offset: -9, city: "Anchorage", type: "city", img: "https://images.unsplash.com/photo-1704243962389-6e57197ccf09?auto=format&fit=crop&q=80&w=2000" },
    { offset: -8, city: "Los Angeles", type: "city", img: "https://images.unsplash.com/photo-1549041050-386c1c99d655?auto=format&fit=crop&q=80&w=2000" },
    { offset: -7, city: "Denver", type: "city", img: "https://images.unsplash.com/photo-1587096085496-2d0e48bc8ac1?auto=format&fit=crop&q=80&w=2000" },
    { offset: -6, city: "Chicago", type: "city", img: "https://images.unsplash.com/photo-1714662660476-022bfd34cf44?auto=format&fit=crop&q=80&w=2000" },
    { offset: -5, city: "New York", type: "city", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=2000" },
    { offset: -4, city: "Santiago", type: "city", img: "https://images.unsplash.com/photo-1689850543263-01a52ccc6943?auto=format&fit=crop&q=80&w=2000" },
    { offset: -3, city: "Rio de Janeiro", type: "city", img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=2000" },
    { offset: -2, city: "the Atlantic Ocean", type: "ocean", img: "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&q=80&w=2000" },
    { offset: -1, city: "Praia", type: "city", img: "https://images.unsplash.com/photo-1705608043808-000663d76a2a?auto=format&fit=crop&q=80&w=2000" },
    { offset: 0, city: "London", type: "city", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2000" },
    { offset: 1, city: "Paris", type: "city", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=2000" },
    { offset: 2, city: "Cairo", type: "city", img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=2000" },
    { offset: 3, city: "Moscow", type: "city", img: "https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?auto=format&fit=crop&q=80&w=2000" },
    { offset: 4, city: "Dubai", type: "city", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000" },
    { offset: 5, city: "the Indian Ocean", type: "ocean", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=2000" },
    { offset: 5.5, city: "Mumbai", type: "city", img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=2000" },
    { offset: 6, city: "Dhaka", type: "city", img: "https://images.unsplash.com/photo-1630987871777-f7b2d62894d0?auto=format&fit=crop&q=80&w=2000" },
    { offset: 7, city: "Bangkok", type: "city", img: "https://images.unsplash.com/photo-1568508432206-7541b535f84c?auto=format&fit=crop&q=80&w=2000" },
    { offset: 8, city: "Singapore", type: "city", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=2000" },
    { offset: 9, city: "Tokyo", type: "city", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=2000" },
    { offset: 10, city: "Sydney", type: "city", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=2000" },
    { offset: 11, city: "the Pacific Ocean", type: "ocean", img: "https://images.unsplash.com/photo-1538864449744-583fe529e11c?auto=format&fit=crop&q=80&w=2000" },
    { offset: 12, city: "Auckland", type: "city", img: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=2000" },
    { offset: 13, city: "Tonga", type: "city", img: "https://images.unsplash.com/photo-1586418233867-0c881fe58719?auto=format&fit=crop&q=80&w=2000" },
    { offset: 14, city: "Kiritimati", type: "city", img: "https://images.unsplash.com/photo-1667270234764-2b36bae86d27?auto=format&fit=crop&q=80&w=2000" }
];

function updateTime() {
    const now = new Date();
    const utcMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
    const targetMinutes = 17 * 60; // 5 PM

    let closestTz = null;
    let minDiff = Infinity;

    timezones.forEach(tz => {
        let localMinutes = (utcMinutes + (tz.offset * 60)) % 1440;
        if (localMinutes < 0) localMinutes += 1440;

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

        const newImgUrl = `url("${closestTz.img}")`;
        if (bgImgElement.style.backgroundImage !== newImgUrl) {
            bgImgElement.style.backgroundImage = newImgUrl;
            // Preload
            const img = new Image();
            img.src = closestTz.img;
        }

        const localTimeFormatted = formatLocalTime(closestTz.offset);
        document.getElementById('local-info').textContent = `Local time: ${localTimeFormatted} (UTC${closestTz.offset >= 0 ? '+' : ''}${closestTz.offset})`;
    }
}

function formatLocalTime(offset) {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const localDate = new Date(utc + (3600000 * offset));
    return localDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
}

// Ensure it runs once immediately
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateTime);
} else {
    updateTime();
}

setInterval(updateTime, 30000);
