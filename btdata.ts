import config from "./config"
export let version = `𝐕𝐞𝐫𝐬𝐢𝐨𝐧: ${config.version}\n𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐧𝐨.: ${config.versionNo}`

export let hcmp = `=========================
Compilation commands
=========================

${config.startSymbol}sh or bash command`

export let hreal = `=========================
Compilation commands
=========================
no commands here

For more ${config.channel}
For queries ${config.group}
`

export let hAdmin = `=========================
Bot admin commands
=========================

${config.startSymbol}chats in which bot joined
${config.startSymbol}count chats count
${config.startSymbol}inf info of chat id with link
${config.startSymbol}sendTask broadcast message
${config.startSymbol}sendto send to any chat by bot
`
export let hUtil = `=========================
Control and info commands
=========================

${config.startSymbol}leave to stop excecution
${config.startSymbol}ping to see bot's running status
${config.startSymbol}version to see version and features
${config.startSymbol}start for basic info
@help for this help list

${config.channel + " " + config.group}
${config.owner ? "Owner: " + config.owner : "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: @PanditSiddharth"}
`

function ob(text: any, action: any) {
  return { text, callback_data: JSON.stringify({ ok: "help", action }) }
}

export let jUtil = {
  reply_markup: {
    inline_keyboard:
      [[ob("Admin", "admin"), ob("Compiler", "cmp"), ob("toReal", "real")], [
        ob("Close", "close")
      ]]
  }
}

export let jReal = {
  reply_markup: {
    inline_keyboard:
      [[ob("Admin", "admin"), ob("Compiler", "cmp"), ob("Utility", "util")], [
        ob("Close", "close")
      ]]
  }
}

export let jAdmin = {
  reply_markup: {
    inline_keyboard:
      [[ob("Utility", "util"), ob("Compiler", "cmp"), ob("toReal", "real")], [
        ob("Close", "close")
      ]]
  }
}

export let jcmp = {
  reply_markup: {
    inline_keyboard:
      [[ob("Utility", "util"), ob("Admin", "admin"), ob("toReal", "real")], [
        ob("Close", "close")
      ]]
  }
}