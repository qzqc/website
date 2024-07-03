document.addEventListener('DOMContentLoaded', () => {
    const links = [
        { url: "https://qzqc.com.tr/meta/IMG_5574.png", text: "IMG_5574" },
        { url: "https://qzqc.com.tr/meta/IMG_5573.png", text: "IMG_5573" },
        { url: "https://qzqc.com.tr/meta/IMG_5572.png", text: "IMG_5572" },
        { url: "https://qzqc.com.tr/meta/IMG_5571.png", text: "IMG_5571" },
        { url: "https://qzqc.com.tr/meta/IMG_5570.png", text: "IMG_5570" },
        { url: "https://qzqc.com.tr/meta/IMG_5569.png", text: "IMG_5569" },
        { url: "https://qzqc.com.tr/meta/IMG_5568.png", text: "IMG_5568" },
        { url: "https://qzqc.com.tr/meta/IMG_5567.png", text: "IMG_5567" },
        { url: "https://qzqc.com.tr/meta/IMG_5566.png", text: "IMG_5566" },
        { url: "https://qzqc.com.tr/meta/IMG_5565.png", text: "IMG_5565" },
        { url: "https://qzqc.com.tr/meta/IMG_5564.png", text: "IMG_5564" },
        { url: "https://qzqc.com.tr/meta/IMG_5563.png", text: "IMG_5563" },
        { url: "https://qzqc.com.tr/meta/IMG_5562.png", text: "IMG_5562" },
        { url: "https://qzqc.com.tr/meta/IMG_5561.png", text: "IMG_5561" },
        { url: "https://qzqc.com.tr/meta/IMG_5560.png", text: "IMG_5560" },
        { url: "https://qzqc.com.tr/meta/IMG_5559.png", text: "IMG_5559" },
        { url: "https://qzqc.com.tr/meta/IMG_5558.png", text: "IMG_5558" },
        { url: "https://qzqc.com.tr/meta/IMG_5557.png", text: "IMG_5557" },
        { url: "https://qzqc.com.tr/album/MCT2.2.m4a", text: "MCT2.2.m4a" }
    ];

    const descriptions = [
        "IMG_5557 is my Instagram account that's linked to my Facebook page.",
        "IMG_5558 explains how I gave out single cover on the 20th May and the single released on 28th May, that's what IMG_5559 explains.",
        "The other photos are from my distributors and some ISRC codes and UPCs.",
        "IMG_5565, IMG_5566, IMG_5567 explains how my website that redirects to my Instagram is on Spotify verifying I am the owner of the artist account.",
        "IMG_5568 is my Spotify account's biography that has my website in it.",
        "IMG_5560 and IMG_5561 shows my both Apple Music and Spotify artist accounts and about Spotify artists that I also manage the other 2 artists so ignore these 2 artists.",
        "IMG_5562 is my distributor's screenshots that give out UPC codes.",
        "IMG_5563 and IMG_5564 are ISRC codes of the music I have released.",
        "IMG_5571, IMG_5572, IMG_5573, and IMG_5574 are my United Masters account that has the alternative version of my “Meet the Chakurs” single exclusive to Meta services.",
        "MCT2.2.m4a is my single named MCTwo that's going to come out soon which can be seen on my distributor in the photo IMG_5562.",
        "My distributor is very slow so the single is currently in QC (quality check).",
        "That's all.",
        "Regards, QZQC"
    ];

    const linkList = document.getElementById('link-list');
    const infoDiv = document.getElementById('info');

    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.text;
        li.appendChild(a);
        linkList.appendChild(li);
    });

    descriptions.forEach(desc => {
        const p = document.createElement('p');
        p.textContent = desc;
        infoDiv.appendChild(p);
    });
});
