import { Cog, Cpu, FileJson, MoreHorizontal, Terminal } from 'lucide-react';
import { File } from './File';
import { Folder } from './Folder';

export function Explorer() {
  return (
    <div className='py-2 px-4 text-[#8F8CA8] bg-[#1b1929]'>
      <strong className='font-medium text-xs pl-2 flex items-center justify-between'>
        EXPLORER
        <MoreHorizontal size={16} strokeWidth={1.5} />
      </strong>

      <nav className='mt-4 flex flex-col'>
        <Folder defaultOpen title='Visual Studio Code'>
          <File href='/vscode/settings'>
            <FileJson size={16} />
            settings.json
          </File>
          <File href='/vscode/extensions'>
            <FileJson size={16} />
            extensions.json
          </File>
        </Folder>

        <Folder title='Terminal'>
          <File href='/terminal/general'>
            <Terminal size={16} />
            General
          </File>
          <File href='/terminal/fish'>
            <Cog size={16} />
            config.fish
          </File>
        </Folder>

        <Folder title='Setup'>
          <File href='/setup/dev-setup'>
            <Cpu size={16} />
            dev.setup
          </File>
        </Folder>
      </nav>
    </div>
  );
}
