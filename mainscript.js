const joinDiscord = document.querySelectorAll("#join-discord");
joinDiscord.forEach((jd) => {
  jd.addEventListener("click", async (e) => {
    const url = await (
      await fetch("https://int.icegenerator.xyz/api/discord-link")
    ).json();
    window.location = url.url;
  });
});
