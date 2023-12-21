{ pkgs }: {
    deps = [
        pkgs.nodejs
        pkgs.toybox
        pkgs.dotnet-sdk_5
        pkgs.nixos-rebuild
        pkgs.python38Full
        pkgs.lsof
        pkgs.mono5
        pkgs.yarn
        pkgs.esbuild
        pkgs.nodePackages.typescript
        pkgs.nodePackages.typescript-language-server
    ];
}