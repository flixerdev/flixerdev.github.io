const joinDiscord = document.querySelectorAll("#join-discord");
joinDiscord.forEach((jd) => {
  jd.addEventListener("click", async (e) => {
    const url = await (
      await fetch("https://discord.gg/freegenerator")
    ).json();
    window.location = url.url;
  });
});
