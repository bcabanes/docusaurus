/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {
  ColorModeProvider,
  TabGroupChoiceProvider,
  AnnouncementBarProvider,
  DocsPreferredVersionContextProvider,
  ScrollControllerProvider,
  NavbarProvider,
  PluginHtmlClassNameProvider,
} from '@docusaurus/theme-common/internal';
import type {Props} from '@theme/LayoutProviders';

export default function LayoutProviders({children}: Props): JSX.Element {
  return (
    <ColorModeProvider>
      <AnnouncementBarProvider>
        <TabGroupChoiceProvider>
          <ScrollControllerProvider>
            <DocsPreferredVersionContextProvider>
              <PluginHtmlClassNameProvider>
                <NavbarProvider>{children}</NavbarProvider>
              </PluginHtmlClassNameProvider>
            </DocsPreferredVersionContextProvider>
          </ScrollControllerProvider>
        </TabGroupChoiceProvider>
      </AnnouncementBarProvider>
    </ColorModeProvider>
  );
}
